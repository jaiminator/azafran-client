import { Input, Button } from "antd"
import "./Login.scss"

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <h1>Login</h1>
        <Input size="large" type="text" placeholder="Username..."></Input>
        <Input size="large" type="password" placeholder="Password..."></Input>
        <Button type="primary">LOGIN</Button>
      </div>
    </>
    
  )
}

export { Login }