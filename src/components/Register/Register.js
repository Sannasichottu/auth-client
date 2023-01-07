import React, { useState } from 'react'
//import '../Login/login.css';
import './register.css'
import Input from '../Input/Input';
import {MdVisibility} from 'react-icons/md'
import {MdVisibilityOff} from 'react-icons/md'

const Register = () => {
    const [visible, setVisible] = useState();
    const handleClick = () => {
      setVisible(!visible)
    }
  return (
    <div>
        <form>
            <Input type="text" text="Name" />
            <Input type="text" text="Email" />
            <Input type={visible ? 'text' : 'password'} icon = {visible ? <MdVisibility /> : <MdVisibilityOff />}  text="Password" handleClick={handleClick}
/>
            <Input type={visible ? 'text' : 'password'} icon = {visible ? <MdVisibility /> : <MdVisibilityOff />}   text="Confirm Password" handleClick={handleClick} />
            <div className="login_btn">
          <button>register</button>

        </div>
        </form>
    </div>
  )
}

export default Register