import { Routes, Route, useNavigate } from "react-router"
import { Ingredients } from "../pages/ingredients/Ingredients"
import { useEffect } from "react"

const AuthedRoutes = () => {

    useEffect(() => {
        if(!localStorage.getItem("access_Token")) {
            alert("UNAUTHORIZED");
            window.location.href = "/login";
        }
    }, [])

  return (
    <Routes>
        <Route path='/' element={<Ingredients/>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
        <Route path='*' element={<Ingredients/>} />
    </Routes>
  )
}

export { AuthedRoutes }