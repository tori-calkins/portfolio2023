import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = () => {
    const [isActive, setIsActive] = useState(false);
  
    const handleLinkClick = () => {
      setIsActive(!isActive);
    };
  
    return (
      <NavLink
        className={`navlinks ${isActive ? "active" : ""}`}
        to="/"
        onClick={handleLinkClick}
      >Home</NavLink>
  );
};

const Header = () => {
    return(
        <>
        <div className="header">
            <NavLink className="navlinks" to="/">Home</NavLink>
            <NavLink className="navlinks" to="/aboutme" >About Me</NavLink>
            <NavLink className="navlinks" to="/projects">Projects</NavLink>
            <NavLink className="navlinks" to="/contactme">Contact Me</NavLink>
        </div>
        </>
    )
}
export default Header