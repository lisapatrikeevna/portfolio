import React from "react";
import {Input} from "../../common/Input";
import cl from "./about.module.css";
import style from "../../common/commonStyle.module.css";

export const About = () => {
       return (
        <div id={'contact'} className={cl.contacts}>
            <div className={`${style.container} ${cl.container}`}>
                <div className={cl.textBlock}>
                    <h3>PROFILE</h3>
                    <p>Since 2017 i have been an active freelance performer. Small
                        opy in expanding functionality, fixing minor bugs, redesign +
                        functionality, design, extensive experience online shopping
                        (opencart). The last 8 months, expanding the functionality of
                        projects to react, fix bugs ,creating unit tests, layout,
                        migration of react-application to typescript, development of
                        small features
                    </p>
                </div>
            </div>
        </div>
    )
}