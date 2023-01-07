import React from 'react';
import Input from '../Input/Input';
import '../Login/login.css'

const Forgot = () => {
  return (
    <form>
        <Input type="text" text="Email"/>
        <div className="login_btn">
            <button>send</button>
        </div>
    </form>
  )
}

export default Forgot