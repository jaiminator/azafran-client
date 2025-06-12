import { Link } from "react-router"

const Header = () => {
  return (
    <>
        <nav style={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
            <Link to={"/"}><h2>Dashboard</h2></Link>
            <Link to={"/login"}><h2>Login</h2></Link>
            <Link to={"/register"}><h2>Register</h2></Link>
        </nav>
    </>
  )
}

export { Header }