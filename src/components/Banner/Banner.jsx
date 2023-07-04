import React from 'react'
import Banner_Image from '../../assets/Banner.png'
import './Banner.css'
import { CgArrowLongDown } from 'react-icons/cg'
import { Link as Scroll } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <>
            <div className="banner" id='banner'>
                <div className="banner-left">
                    <div className="field">
                    </div>

                    <div className="name break-words">Muhammad Adnan</div>

                    <TypeAnimation
                        sequence={[
                            1000, 'Full Stack Web Developer',
                            1000, 'React JS Developer',
                            1000, 'Node JS Developer',
                            1000,
                        ]}
                        wrapper="p"
                        className="intro"
                        speed={40}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <div className="btn-gp">
                        <Scroll to='contact' spy={true} smooth={true} offset={-100} duration={500} className="btn-gradient">Contact Me</Scroll>
                        <a href="https://1drv.ms/u/s!AoECPlVfD5n4hegGvagliukjtJf_RA?e=esy1Ja" target="_blank" className="btn-gradient">Download CV</a>
                    </div>
                </div>
                <div className="banner-right">
                    <img className="image" src={Banner_Image} alt="Banner Image" srcet={Banner_Image} />
                </div>
            </div>
            <div className="arrow-down">
                <CgArrowLongDown style={{ width: '20px', height: "40px", border: '1px solid' }} />
            </div>
            <div className="about">
                <div className="about-txt">About me</div>
                <div className="about-desctiption">
                    I'm a Full Stack Web developer with over 1.5 years of experience. In addition, I am familiar with
                    Node Js to an intermediate level. As a React.js developer, I create interactive and
                    dynamic user interfaces. Using my skills in both technologies, I can create scalable and
                    efficient web applications as well as handle both the frontend and backend aspects. I
                    am looking forward to taking on new challenges in the future. I have a strong
                    understanding of building and deploying web applications.
                </div>
            </div>
        </>
    )
}

export default Banner
