import React from 'react'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import './Footer.css'
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <svg width="30px" height="30px">
                <linearGradient id="gradient-icon" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#00F5A0 " offset="0%" />
                    <stop stopColor="#00D9F5" offset="100%" />
                </linearGradient>
                <linearGradient id="gradient-icon-hover" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#00F5A0 " offset="0%" />
                    <stop stopColor="#00D9F5" offset="100%" />
                </linearGradient>
            </svg>
            <div className="w-full bg-[#041f31f5] shadow-footer mt-6 xl:absolute xl:z-50 xl:bottom-0">
                <div className="main-container bg-[#041f31f5]">


                    <div className="flex w-11/12 flex-col items-center mx-auto justify-center py-4 sm_md:flex-row sm_md:justify-between">
                        <Typography className="text-base sm:text-xl mb-4 text-center gradient-text font-bold  sm_md:mb-0"                        >
                            Copyright  &copy; {currentYear} <Link to="/" className=' mr-1'>Dev Adnan</Link> All Rights Reserved.
                        </Typography>
                        <div className="flex gap-4  sm_md:justify-center flex-wrap justify-center">
                            <a href="https://www.linkedin.com/in/adnanbwp/" className="btn-social" target="_blank">
                                <BsLinkedin style={{ fill: "url(#gradient-icon)" }} />
                            </a>
                            <a href="https://github.com/adnanbwp7" className="btn-social" target="_blank">
                                <BsGithub style={{ fill: "url(#gradient-icon)" }} />
                            </a>
                            <a href="https://wa.me/923096814886" className="btn-social" target="_blank">
                                <RiWhatsappFill style={{ fill: "url(#gradient-icon)" }} />
                            </a>
                            <a href="https://www.facebook.com/adnanbwp7" className="btn-social" target="_blank">
                                <BsFacebook style={{ fill: "url(#gradient-icon)" }} />
                            </a>
                            <a href="https://twitter.com/adnanbwp7" className="btn-social" target="_blank">
                                <AiFillTwitterCircle style={{ fill: "url(#gradient-icon)" }} />
                            </a>
                            <a href="https://www.instagram.com/adnanbwp7/" className="btn-social" target="_blank">
                                <AiFillInstagram style={{ fill: "url(#gradient-icon)" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
