import { Input, Button } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router"
import "./Login.scss"

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [infoLogin, setInfoLogin] = useState("");

  const isButtonEnabled = 
    user && 
    password;

  const handlerLoginButton = () => {
    console.log(user, password);

    // POST /login
    // si el resultado es exitoso redirigir a /ingredients
     fetch("http://localhost:8080/users/login", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        username: user,
        password: password
      })
     })
     .then((res) => {
      if(res.ok) {
        alert("User logged");
        navigate("/ingredients");
      } else {
        setInfoLogin("INVALID CREDENTIALS");
      }
     })
     .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="loginContainer">
        <h1>Login</h1>
        <Input 
          size="large"
          type="text"
          value={user} 
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username...">
        </Input>
        <Input 
          size="large"
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password...">
        </Input>
        <Button disabled={!isButtonEnabled} onClick={handlerLoginButton} type="primary">LOGIN</Button>
        <h4>{infoLogin}</h4>
      </div>
    </>
    
  )
}

export { Login }