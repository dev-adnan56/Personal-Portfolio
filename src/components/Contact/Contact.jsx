import React from 'react'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import './Contact.css'
const Contact = () => {
    return (
        <>

            <div className="projects justify-start flex flex-col gradient-border max-w-screen-lg" id="contact" >
                <div className="about-txt" style={{ margin: '10px auto' }}>Contact me</div>

                {/* <div className="projects" id="contact" style={{ flexDirection: 'row', margin: '0 auto' }}> */}
                <div className="form">
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required className="input-fields" placeholder='Name' />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required className="input-fields" placeholder="e.g example@email.com" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" required className="input-fields" placeholder="Message here" rows={7} />
                    </div>
                    <button className="btn-gradient" style={{ width: '100%', maxWidth: "550px" }}>Submit</button>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Contact
