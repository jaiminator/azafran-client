import { BrowserRouter} from 'react-router'
import { UnAuthedRoutes } from './routes/UnAuthedRoutes'
import { AuthedRoutes } from './routes/AuthedRoutes'
import './App.css'

function App() {

  const userLogged = localStorage.getItem("access_Token");

  return (
    <>
      <BrowserRouter>
        {userLogged ? <AuthedRoutes /> : <UnAuthedRoutes />}
      </BrowserRouter>
    </>
  )
}

export default App
