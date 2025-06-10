import { Input, Button } from "antd";
import { useState, useEffect} from "react"
import { useNavigate } from "react-router";
import { LogoutButton } from "../../components/LogoutButton";
import "./Ingredients.scss"

const Ingredients = () => {

    const navigate = useNavigate();
    const accessToken = localStorage.getItem("access_Token");
    const localUser = localStorage.getItem("user");
    const [listIngredients, setListIngredients] = useState([]);
    
    //Variables de estado para crear un ingrediente
    const [nameIngredient, setNameIngredient] = useState("");
    const [quantity, setQuantity] = useState("");

    //CREATE INGREDIENT
    const handleCreateIngredient = () => {
        if (nameIngredient && quantity){
            fetch("http://localhost:8080/ingredients", {
                headers: {
                    "Content-Type": "application/json",
                    authorization: accessToken
                },
                method: "POST",
                body: JSON.stringify({
                    name: nameIngredient,
                    userId: accessToken,
                    quantity: Number(quantity)
                })
            })
            .then(() => {
                alert("Ingredient created");
                window.location.reload();
            })
            .catch((error) => alert("Error to create ingredient", error))
        } else {
            alert("Fields required to create ingredient");
        }
        
    }

    //LOGOUT
    const handleLogoutButton = () => {
        localStorage.clear();
        navigate("/login");
    }
    
    //RENDER COMPONENT
    useEffect(() => {
        if(!accessToken) {
            alert("UNAUTHORIZED");
            navigate("/login");
        } else {
            fetch("http://localhost:8080/ingredients", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    authorization: accessToken
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setListIngredients(data);
            })
        }
    }, [])

    return (
        <>
            <div className="headerUser">
                <h2 style={
                {
                    backgroundColor: "#FFE",
                    border: '1px dotted black'
                }
                }>WELCOME, {localUser}</h2>
                <LogoutButton onClick={handleLogoutButton}></LogoutButton>
            </div>
            <h2>Ingredients</h2>
            <table className="ingredientsTable">
                <tbody>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>NAME</th>
                        <th>QUANTITY</th>
                    </tr>
                    {listIngredients.map((ingredient, index) => {
                        return (
                            <>
                                <tr key={ingredient._id}>
                                    {/* <td>{ingredient._id}</td> */}  
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.quantity}</td>
                                </tr>
                            </>
                        )}
                    )} 
                </tbody>
            </table>
            <br />
            <div className="createIngredientContainer">
                <h2>Create Ingredient</h2>
                <Input 
                    type="text" 
                    onChange={(e) => setNameIngredient(e.target.value)} 
                    placeholder="Name..."/>
                <Input 
                    type="number" 
                    onChange={(e) => setQuantity(e.target.value)} 
                    placeholder="Quantity..."/>
                <Button 
                    type="primary" 
                    onClick={handleCreateIngredient}>Create ingredient</Button>
            </div>
        </>
    )
}

export { Ingredients }