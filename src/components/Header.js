import React from 'react';
import logo from '../images/logo.svg';
import '../App.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo"/>
        </div>
    )
}

export default Header;