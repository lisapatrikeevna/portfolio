import React from 'react';
import cl from  './header.module.css'
import logo from './../image/logo.png'
import {NavLink} from "react-router-dom";

export const Header= ()=>{
return(
    <div className={cl.header}>
        <NavLink to={'https://freelance.ru/lisa15'}><img src={logo} alt="letLogo" className={cl.logo}/></NavLink>
        <Nav/>
    </div>

)
}
export const Nav= ()=>{
    return(
        <div className={cl.nav}>
            <ul>
                <li><Link to={'#'}></Link>home</li>
                <li><Link to={'#skils'}>skils</Link></li>
                <li><Link to={'#projekt'}>projekt</Link></li>
                <li><Link to={'#contact'}>contact</Link></li>
                <li><Link to={'#footer'}>footer</Link></li>
            </ul>
        </div>
    )
}