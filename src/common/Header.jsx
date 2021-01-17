import React, {useState} from 'react';
import cl from  './header.module.css'
import logo from './../image/logo.png'
import { NavLink} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  "./forBars.css";

export const Header= ()=>{
return(
    <div className={cl.header}>
        <NavLink to='https://freelance.ru/lisa15'><img src={logo} alt="letLogo" className={cl.logo}/></NavLink>
        <Nav/>
    </div>
)
}
export const Nav= ()=>{
    let[collaps,setCollaps]=useState(false)
    let onStyle = {}
    if(window.innerWidth < 576){
         onStyle = {
            visibility:  collaps? "visible": "collapse"
        }
    }

    const onClickHandler=()=>{
        setCollaps(!collaps)
    }
    return(
        <div className={cl.nav}>
            <FontAwesomeIcon icon={faBars} onClick={onClickHandler}/>
            <ul style={onStyle}>
                <li><Link to='skils'  duration={500} spy={true} smooth={true}>skills</Link></li>
                <li><Link to='projekt' duration={500} spy={true} smooth={true}>projects</Link></li>
                <li><Link to='contact' duration={500} spy={true} smooth={true}>contact</Link></li>
                <li><Link to='footer' duration={500} spy={true} smooth={true}>footer</Link></li>
            </ul>
        </div>
    )
}