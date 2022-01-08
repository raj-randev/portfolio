import React, { useState } from 'react';
import info from '../../assets/images/info.svg';
import HTMLReactParser from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';


const Info = ({text, title, repoAddress }) => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className='infoContainer'>
            <div className={isActive ? "noDisplayInfo" : "displayInfo"}>
                <div className='topSection'><h2 className='infoTitle' >{title}</h2><a className='repoLink' href={repoAddress} target='_blank' rel="noreferrer" >Repo{'\u00A0'}<FontAwesomeIcon style={{fontSize: '20px'}} color='#000000' icon={faGitAlt} /></a></div>
                <div className='descriptionSection'>{HTMLReactParser(text)}</div>
            </div>
            <div className='infoLogoContainer'>  
                <img alt='Information' className='infoLogo' width={35} src={info} onClick={handleToggle} />
            </div>
        </div>
    )
}

export default Info