import React, { useState } from 'react'
import info from '../../assets/images/info.svg';

const Info = ({text, }) => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className='infoContainer'>
            <div className={isActive ? "noDisplayInfo" : "displayInfo"}>
                <p>{text}</p>
            </div>
            <div className='infoLogoContainer'>  
                <img alt='Information' className='infoLogo' width={35} src={info} onClick={handleToggle} />
            </div>
        </div>
    )
}

export default Info