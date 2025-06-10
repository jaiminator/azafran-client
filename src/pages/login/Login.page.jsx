import { Input, Button } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router"
import "./Login.scss"

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const isButtonEnabled = 
    user.trim() && 
    password.trim();

  const handlerLoginButton = () => {

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
     .then(async (res) => {
      const data = await res.json();
      if (res.status >= 400 && data.msg) {
        setErrorMsg(data.msg);
      } else {
        localStorage.setItem("access_Token", data.accessToken);
        localStorage.setItem("user", user);
        navigate("/ingredients");
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
          placeholder="Username..."
          autoFocus>
        </Input>
        <Input 
          size="large"
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password...">
        </Input>
        <Button disabled={!isButtonEnabled} onClick={handlerLoginButton} type="primary">LOG IN</Button>
        <a onClick={() => navigate("/register")}>Don't have you an account? Let's register</a>
        <h4>{errorMsg}</h4>
      </div>
    </>
    
  )
}

export { Login }