import React from 'react';
import './resetlayout.css';
import Reset from '../../components/Reset/Reset';

const ResetLayout = ({history}) => {
    const handleClick = () => {
        history.push("/");
    };

  return (
    <div className="authlayout">
        {/* logo */}
            <div className="authlayout_logo">
                <img src="https://cdn-icons-png.flaticon.com/512/1357/1357634.png" alt="logo" />
            </div>
        {/* form */}
            <Reset />
        {/* actions */}
            <p className='reset_p' onClick={handleClick} >login ?</p>

    </div>
  )
}

export default ResetLayout;