import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
        <div className="header">
            <NavLink className="navlinks">Home</NavLink>
            <NavLink className="navlinks" to="/aboutme" >About Me</NavLink>
            <NavLink className="navlinks">Projects</NavLink>
            <NavLink className="navlinks">Contact Me</NavLink>
        </div>
        </>
    )
}
export default Header