import React from 'react'
import './NavBar.css'
import Logo from '../../assets/icon.png'
import { Link as Scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <>
            <div className="navbar shadow-nav">
                <div className="nav-container">
                    <Link to='/' className="title">
                        <img src={Logo} className='img-logo' alt="Muhammad Adnan" srcSet={Logo} width="100px" />
                    </Link>
                    <div className="nav-left">
                        <Scroll to='projects' spy={true} smooth={true} offset={-100} duration={500} className="title">
                            Projects
                        </Scroll>
                        <Scroll to='contact' spy={true} smooth={true} offset={-100} duration={500} className="btn-gradient">
                            Contact
                        </Scroll>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
