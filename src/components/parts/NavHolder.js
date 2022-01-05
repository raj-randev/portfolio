import React, { useState } from 'react';
import Navbar from './Navbar';
import menuOpen from '../../assets/images/menu.svg';
import menuClose from '../../assets/images/close.svg';


const NavHolder = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className='navBarContainer'>
            <Navbar toggleMenu={isActive ? "noDisplay" : "display"} navClass={isActive ? "noDisplay" : "display"}/>
            <div className='navHolder'>  
                <img alt='Menu' className='hamburger' width={35} src={isActive ? menuOpen : menuClose} onClick={handleToggle} />
            </div>
        </div>
    )
}

export default NavHolder

