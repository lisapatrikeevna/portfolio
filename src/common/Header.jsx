import React from 'react';
import cl from  './header.module.css'

export const Header= ()=>{
return(
    <div className={cl.header}>
        <img src="http://webstydio.lisa15.ru/image/catalog/product_globo_logo01.png" alt="letLogo"/>
        <Nav/>
    </div>

)
}
export const Nav= ()=>{
    return(
        <div className={cl.nav}>
            <ul>
                <li><a href="#"></a>home</li>
                <li><a href="#"></a>skils</li>
                <li><a href="#"></a>projekt</li>
                <li><a href="#"></a>contact</li>
                <li><a href="#"></a>footer</li>
            </ul>
        </div>
    )
}