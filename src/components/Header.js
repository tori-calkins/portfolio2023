import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
        <div className="header">
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to="/aboutme" >About Me</NavLink>
            <NavLink className="navlinks" to="/projects">Projects</NavLink>
            <NavLink className="navlinks">Contact Me</NavLink>
        </div>
        </>
    )
}
export default Header