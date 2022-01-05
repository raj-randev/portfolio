import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faNeos, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/images/stackedLogoV1.png';
import { Link } from "react-router-dom";

const Navbar = ({navClass, toggleMenu}) => {
    return (
       
        <div className={navClass}>
                
            <div className='navMenuContainer'>
                <div style={{alignSelf: 'center'}}>
                    <Link onClick={toggleMenu} to='/'>
                        <img width={60} src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='navList'>
                    <ul>
                        <li key={1}><Link onClick={toggleMenu} to='/animation-2d/' className='navButton'><FontAwesomeIcon style={{fontSize: '40px'}} color='#ffffff' icon={faDiceD20}/> <p>2D Animations</p></Link></li>
                        <li key={2}><Link onClick={toggleMenu} to='/animation-3d/' className='navButton'><FontAwesomeIcon style={{fontSize: '40px'}} color='#ffffff' icon={faNeos}/> <p>3D Animations</p></Link></li>
                        <li key={3}><Link onClick={toggleMenu}  to='/websites/' className='navButton'><FontAwesomeIcon style={{fontSize: '40px'}} color='#ffffff' icon={faFileCode}/> <p>Websites</p></Link></li>
                    </ul>
                </div>
                <div className='navList'>
                    <ul>
                        <li key={4}><a href='https://github.com/raj-randev' target='_blank' rel="noreferrer" className='navButton'><FontAwesomeIcon style={{fontSize: '40px'}} color='#ffffff' icon={faGithub}/> <p>Github</p></a></li>
                        <li key={5}><a href='www.linkedin.com/in/rajan-randev' target='_blank' rel="noreferrer" className='navButton'><FontAwesomeIcon style={{fontSize: '40px'}} color='#ffffff' icon={faLinkedin}/> <p>LinkedIn</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
