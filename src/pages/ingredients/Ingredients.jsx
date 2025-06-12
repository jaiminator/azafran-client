import { Input, Button } from "antd";
import { useState, useEffect} from "react"
import { Header } from "../../components/Header";
import { LogoutButton } from "../../components/LogoutButton";
import { Ingredient } from "../../components/Ingredient";
import "./Ingredients.scss"

const Ingredients = () => {
    
    //Variables de estado iniciales
    const accessToken = localStorage.getItem("access_Token");
    const localUser = localStorage.getItem("user");
    const [listIngredients, setListIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
        window.location.href = "/login";
    }
    
    //RENDER COMPONENT
        useEffect(() => {
            fetch("http://localhost:8080/ingredients", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    authorization: accessToken
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setListIngredients(data);
                    setLoading(false);
                }, 2000)
            })
        }, [])

    return (
        <>
            <Header />
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
            {loading ? (
                <div className="loader"></div>
            ) : (
            <table className="ingredientsTable">
                <tbody>
                    <tr>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                    </tr>
                    {listIngredients.map((ingredient, index) => {
                        return (
                            <Ingredient key={index} name={ingredient.name} quantity={ingredient.quantity} />
                        )}
                    )} 
                </tbody>
            </table>
            )}
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