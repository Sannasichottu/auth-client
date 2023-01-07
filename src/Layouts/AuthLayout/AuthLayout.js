import Login from '../../components/Login/Login';
import './authlayout.css'

const AuthLayout = () => {
    return ( <div className="authlayout">
    {/*logo*/}
        <div className="authlayout_logo">
            <img src="https://cdn-icons-png.flaticon.com/512/1357/1357634.png" alt="logo" />
        </div>

    {/*form*/}
        <Login />

    {/*actions*/}
        <div className="authlayout_actions">
            <p className="authlayout_actions-l">Register ?</p>
            <p className="authlayout_actions-r">login ?</p>
        </div>

    </div> );
}

export default AuthLayout;