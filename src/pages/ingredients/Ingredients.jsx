import { Input, Button } from "antd";
import { useState, useEffect} from "react"
import { useNavigate } from "react-router";
import { LogoutButton } from "../../components/LogoutButton";
import "./Ingredients.scss"

const Ingredients = () => {

    const navigate = useNavigate();

    const [nameIngredient, setNameIngredient] = useState("");
    const [quantity, setQuantity] = useState("");

    const [listIngredients, setListIngredients] = useState([]);
    const getAccessToken = localStorage.getItem("access_Token");

    const handleLogoutButton = () => {
        localStorage.removeItem("access_Token");
        navigate("/login");
    }

    const handleCreateIngredient = () => {
        fetch("http://localhost:8080/ingredients", {
            headers: {
                "Content-Type": "application/json",
                authorization: getAccessToken
            },
            method: "POST",
            body: JSON.stringify({
                name: nameIngredient,
                userId: getAccessToken,
                quantity: Number(quantity)
            })
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/ingredients", {
            headers: {
                authorization: getAccessToken
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setListIngredients(data);
        })
    }, [])

    return (
        <>
            <h1>Ingredients</h1>
            <table className="ingredientsTable">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                    </tr>
                    {listIngredients.map((ingredient, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{ingredient._id}</td>  
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
                <Input type="text" onChange={(e) => setNameIngredient(e.target.value)} placeholder="Name..."/>
                <Input type="number" onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity... (default: 1)"/>
                <Button type="primary" onClick={handleCreateIngredient}>Create ingredient</Button>
            </div>
            <br />
            <LogoutButton onClick={handleLogoutButton}></LogoutButton>
        </>
    )
}

export { Ingredients }