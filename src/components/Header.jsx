import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


function Header(){
    return (
    <header className="navbar">
        <img src="logo.png" className="logo"></img>
        <ul className="navbar-list">
        <NavLink to="/">
            <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
            <li>A propos</li>
        </NavLink>
        </ul>
    </header>
        );
}

export default Header;