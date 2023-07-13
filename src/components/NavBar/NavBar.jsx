import React from 'react'
import './NavBar.css'
import Logo from '../../assets/icon.png'
import { Link as Scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <>
            <div className="navbar shadow-nav">
                <div className="flex justify-between flex-col sm:flex-row w-full md:px-3  max-w-[1368px] mx-auto ">
                    <Link to='/' className="title w-full sm:w-auto my-1">
                        <img src={Logo} className='img-logo mx-auto' alt="Muhammad Adnan" srcSet={Logo} width="100px" />
                    </Link>
                    <div className="grid grid-cols-1 x-sm:grid-cols-3 max-w-lg w-11/12 sm:w-8/12 mx-auto sm:mx-5 gap-x-2">
                        <Scroll to='skills' spy={true} smooth={true} offset={-140} duration={500} className="title my-3 mx-auto">
                            Skills
                        </Scroll>
                        <Scroll to='experience' spy={true} smooth={true} offset={-140} duration={500} className="title my-3 mx-auto">
                            Experience
                        </Scroll>
                        <Scroll to='projects' spy={true} smooth={true} offset={-140} duration={500} className="title my-3 mx-auto">
                            Projects
                        </Scroll>
                        {/* <Scroll to='contact' spy={true} smooth={true} offset={-100} duration={500} className="btn-gradient">
                            Contact
                        </Scroll> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
