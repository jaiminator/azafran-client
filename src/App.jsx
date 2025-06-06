import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from "./pages/login/Login.page"
import { Register } from "./pages/register/Register.page"
import { Ingredients } from './pages/ingredients/Ingredients'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/ingredients' element={<Ingredients/>}></Route>
          {/* <Route path='*' element={<Login/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
