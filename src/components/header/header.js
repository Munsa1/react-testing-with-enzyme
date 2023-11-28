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
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>

                </div>
            </div>
        </header>
    )
};

export default Header;