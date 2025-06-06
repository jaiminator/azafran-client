import { Input, Button } from "antd"
import { useState } from "react"
import "./Register.scss"

const Register = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const isButtonEnabled = 
    user && 
    password &&
    password == repeatPassword;

  const handlerRegisterButton = () => {
    console.log(user, password, repeatPassword);
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
      </div>
    </>
    
  )
}

export { Register }