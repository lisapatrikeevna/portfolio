import React from 'react';
import cl from './offer.module.css';
import style from './../common/commonStyle.module.css'

export const Offer = () => {
    return (
        <div className={cl.offer}>
            <div className={`${style.container} ${cl.container}`}>
                <div className={cl.textBlock}>
                    <h1>hi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    <h6>consectetur adipiscing elit, sed do ei</h6>
                </div>
                <div className={cl.imageBlock}><img className={cl.mainFoto} src="https://sun9-28.userapi.com/c627823/v627823004/9034/mMV8Ep24vjw.jpg" alt="foto"/></div>
            </div>
        </div>

    )
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