import React from 'react';
import cl from './offer.module.css';
import style from '../../common/commonStyle.module.css';
import girl from './../../image/girl.png'

export const Offer = () => {
    return (
        <div className={`${cl.offer} `}>
            <div className={`${style.container} ${cl.container}`}>
                <div className={cl.textBlock}>
                    <h1>hi </h1>
                    <p>Self-motivated and energetic FrontEnd developer with practical
                        experience in React, Redux,
                        JS,Opencart,PHP, HTML, CSS,
                        self-discipline and teamwork skills.
                    </p>
                    <h6>in stealth about me</h6>
                </div>
                <div className={cl.imageBlock}><img className={cl.mainFoto} src={girl}/></div>
            </div>
        </div>  )
}
export const Main = () => {
    return (
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