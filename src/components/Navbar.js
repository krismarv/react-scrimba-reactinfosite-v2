import React from 'react';
import '../navbar.css';
import logo from '../images/react-logo.png'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <img src={logo} width='30px'></img>
                ReactFacts
            </div>
            <div className='nav-description'>
                React Course - Project 1
            </div>
        </nav>
    )
}
