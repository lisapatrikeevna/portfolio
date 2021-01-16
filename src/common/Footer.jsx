import React from 'react';
import cl from './footer.module.css'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <div id={'footer'} className={cl.footer}>
            <Nav/>
        </div>

    )
}
export const Nav = () => {
    return (
        <div className={cl.nav}>
            <ul>
                <li><NavLink to={''}>+38 (099) 47-147-70</NavLink></li>
                <li><NavLink to={''}>+38 (096) 07-997-42</NavLink></li>
                <li><NavLink to={'lisa15.08patrikeevana@gmail.com'}>lisa15.08patrikeevana@gmail.com</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to={'https://freelance.ru/lisa15'}>freelance.ru</NavLink></li>
                <li><NavLink to={'https://www.codewars.com/users/lisa15'}>codewars</NavLink></li>
                <li><NavLink to={'https://www.linkedin.com/in/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-%D0%B1%D0%BE%D0%BD%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE-41868a163/'}>linkedin</NavLink>
                </li>
            </ul>
        </div>
    )
}