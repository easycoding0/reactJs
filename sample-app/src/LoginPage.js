import React from 'react'

import "./login.css";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");


    const loginHandler = (event) => {
        event.preventDefault();

        if(username !== "" && password !== ""){
            navigate("/");
        }else{
            setError("Invalid username & password.");
        }


    }

  return (
    <div className='container'>
        <div className="wrap-box">
            <form>
                <h5>Login</h5>
                <p>Welcome back!</p>
                {error && error !== "" ? <p>{error}</p> : ""}
                <div className="input-group">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group">
                    <input type="submit" value={"Submit"} onClick={loginHandler} />
                </div>
            </form>
        </div>
    </div>
  )
}
