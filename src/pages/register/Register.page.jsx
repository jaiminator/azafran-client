import { Input, Button } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router"
import "./Register.scss"

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [msgRegister, setMsgRegister] = useState("");

  const isButtonEnabled = 
    user && 
    password &&
    password == repeatPassword;

  const handlerRegisterButton = () => {

    // POST /register
    // si el resultado es exitoso redirigir a /login
     fetch("http://localhost:8080/users/register", {
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
        alert("User registed");
        navigate("/login");
      } else {
        setMsgRegister("USER_ALREADY_EXISTS");
      }
     })
     .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="registerContainer">
        <h1>Register</h1>

        <Input 
          type="text"
          value={user} 
          onChange={(e) => setUser(e.target.value)}
          placeholder="User...">
        </Input>

        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password...">
        </Input>

        <Input 
          type="password"
          value={repeatPassword} 
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat password...">
        </Input>

        <Button 
          disabled={!isButtonEnabled}
          type="primary"
          onClick={handlerRegisterButton}>REGISTER</Button>

          <h4>{msgRegister}</h4>
      </div>
    </>
    
  )
}

export { Register }