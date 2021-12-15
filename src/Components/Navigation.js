import React from "react";
import { NavLink } from "react-router-dom";


function Navigation(){
    return (
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About Me</NavLink>
            <NavLink to="/projects"> Projects </NavLink>
            <NavLink to="/contact"> Contact Me </NavLink>
        </nav>
    )
}

export default Navigation;
