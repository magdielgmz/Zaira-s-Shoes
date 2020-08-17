import React from 'react';
import logo from '../assets/logo.svg'
import {  NavLink } from 'react-router-dom'
// import user from '../assets/user-circle-solid.svg'
import shoppingBag from '../assets/Shape.svg'
import '../styles/Navbar.css'
import UserRegister from '../pages/UserRegister'



function Navbar () {
    return (           
            <nav className="navbar ">
                <img src={logo} className="logo" alt="logo" />
                <NavLink to="/" className="navLink" activeClassName="active" isActive={checkActive}>Home</NavLink>
                <NavLink to="/about" className="navLink" activeClassName="active">About</NavLink>
                <NavLink to="/catalouge" className="navLink" activeClassName="active">Catalouge</NavLink>
                <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
                <img className="shoppingBag" src={shoppingBag} alt="" />
                <NavLink to="/user"><span className="material-icons user">account_circle</span></NavLink>
                <span className="numberBag">0</span>
            </nav>
    );
}

const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}

export default Navbar;

