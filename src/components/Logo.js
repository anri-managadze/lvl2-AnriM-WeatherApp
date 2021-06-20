import React from 'react';
import './Logo.css';
const Logo = () => {
    const refreshPage = ()=>{
        window.location.reload();
    }
    return (
        <div className='logo'>
            <img src='https://i.pinimg.com/originals/dc/ce/fb/dccefb789699a764dcfcf26b4394d264.png' alt='logo-pic' onClick={refreshPage}/>
        </div>
    );
};

export default Logo;

