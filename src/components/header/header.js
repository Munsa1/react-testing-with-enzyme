import React from 'react'
import './header.scss';
import myLogo from '../../assests/graphics/logo.png'


const Header = ()=>{

    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={myLogo} alt="Logo" />
                </div>
                <div className='nav-links'>
                    <ul>
                        <a href='#'><li>Home</li></a>
                        <a href='#'><li>Contact</li></a>
                        <a href='#'><li>About</li></a>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;