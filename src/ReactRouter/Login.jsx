import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth/AuthContext"
export function Login() {
    const navigate = useNavigate()
    const [isLoggedIn, setisLoggedIn] = useAuth();
    const handle = () => {
        setisLoggedIn(!isLoggedIn)
    }
    return (
        <>
            {
                !isLoggedIn && <>
                    <h2>Login Page</h2>
                    <input type='email' placeholder="enter email"></input>
                </>
            }
            <div>
                <button onClick={handle}>{isLoggedIn ? 'LogOut' : 'Login'}</button>
            </div>
   
        </>
    )
}
