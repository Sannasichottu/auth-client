import { useState } from 'react';
import Forgot from '../../components/Forgot/Forgot';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import './authlayout.css'

const AuthLayout = () => {

    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const [forgot, setForgot] = useState(false);

    const handleLogin = () => {
        setLogin(true)
        setRegister(false)
        setForgot(false)
    }
    const handleRegister = () => {
        setLogin(false)
        setRegister(true)
        setForgot(false)
    }
    const handleForgot = () => {
        setLogin(false)
        setRegister(false)
        setForgot(true)
    }

    return ( <div className="authlayout">
    {/*logo*/}
        <div className="authlayout_logo">
            <img src="https://cdn-icons-png.flaticon.com/512/1357/1357634.png" alt="logo" />
        </div>

    {/*form*/}

        {login && <Login />}
        {register && <Register />}
        {forgot && <Forgot />}

    {/*actions*/}
        <div className="authlayout_actions">
            <p className="authlayout_actions-l"
                onClick={login ? handleRegister : handleLogin}
            >
                {login ? "Register ?" : "Login ?"}
            </p>
            <p className="authlayout_actions-r" onClick={handleForgot} >Forgot ?</p>
        </div>

    </div> );
}

export default AuthLayout;