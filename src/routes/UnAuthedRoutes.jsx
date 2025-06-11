import { Navigate, Route, Routes } from "react-router"
import { Login } from "../pages/login/Login.page"
import { Register } from "../pages/register/Register.page"

const UnAuthedRoutes = () => {
    
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='*' element={<Navigate to={"/login"} replace />} />
        </Routes>
    </>
  )
}

export { UnAuthedRoutes }