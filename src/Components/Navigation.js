import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation(){
    return (
        <nav>
            <NavLink to="/" className="links" > Home </NavLink>
            <NavLink to="/about" className="links"> About Me</NavLink>
            <NavLink to="/projects" className="links"> Projects </NavLink>
            <NavLink to="/contact" className="links"> Contact Me </NavLink>
        </nav>
    )
}

export default Navigation;
