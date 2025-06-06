import { useEffect, useState } from "react"
import "./Ingredients.scss"

const Ingredients = () => {

    const [listIngredients, setListIngredients] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/ingredients", {
            /* headers: {
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODQyY2M3ZTdlNDUxMmRkOTVhYjk0ODciLCJpYXQiOjE3NDkyMDk4NjV9.cN765_hkRYJyr9JYYnDSQytWuRge8A1nBi5oxtD1hKM"
            } */
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }, [])

    return (
        <h1>Ingredients</h1>
    )
}

export { Ingredients }