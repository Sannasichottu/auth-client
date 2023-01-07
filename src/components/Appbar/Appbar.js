import React from 'react';
import './appbar.css';
import Avatar from '../Avatar/Avatar';
import {BiMenuAltLeft} from 'react-icons/bi';


const Appbar = ({handleSidebar}) => {
  return (
    <div className='appbar' >
        <div className="appbar_wrapper">
            {/* logo */}
            <div className="appbar_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Creative-Tail-rocket.svg/1200px-Creative-Tail-rocket.svg.png" alt="logo" />
                <p>mern-auth</p>
            </div>
            {/* avatar */}
            <div className="appbar_avatar">
                <Avatar />
                <BiMenuAltLeft onClick={handleSidebar}  />
            </div>

        </div>
    </div>
  )
}


export default Appbar
