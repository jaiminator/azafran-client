import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import "./Ingredients.scss"

const Ingredients = () => {

    const navigate = useNavigate();

    const [listIngredients, setListIngredients] = useState([]);
    const getAccessToken = localStorage.getItem("access_Token");

    const handleLogoutButton = () => {
        localStorage.removeItem("access_Token");
        navigate("/login");
    }

    useEffect(() => {
        fetch("http://localhost:8080/ingredients", {
            headers: {
                authorization: getAccessToken
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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
                    )
                    })} 
                </tbody>
            </table>
            <br />
            <button onClick={handleLogoutButton}>LOG OUT</button>
        </>
    )
}

export { Ingredients }