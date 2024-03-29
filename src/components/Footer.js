import React from "react";
import linkedInIcon from'../assets/linkedin.png'
import gitHubIcon from'../assets/github1.png'
import MailIcon from'../assets/emailicon.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="bottomIcons">
                <a href="https://www.linkedin.com/in/victoria-calkins-" target="_blank">
                    <img src={linkedInIcon} alt="LinkedIn Icon"/>
                </a>
                <a href="https://github.com/tori-calkins" target="_blank">
                    <img src={gitHubIcon} alt="GitHub Icon" />
                </a>
                <NavLink to="/contactme">
                    <img src={MailIcon} alt="GitHub Icon" />
                </NavLink>
            </div>
        </div>
        </>
    )
}
export default Footer