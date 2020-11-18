import React from 'react';
import cl from './skils.module.css'
import style from "../../common/commonStyle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faOptinMonster} from "@fortawesome/free-brands-svg-icons";
import {faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons/faChalkboardTeacher";
import {faFigma} from "@fortawesome/free-brands-svg-icons/faFigma";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";


export const SkilsSection = () => {
    return (
        <div className={cl.MySkils}>
            <div className={`${style.container} ${cl.container}`}>
                <h3>my skils</h3><FontAwesomeIcon icon={["fas", "coffee"]} />
                <Main/>
            </div>
        </div>
    )
}
export const Main = () => {
    const skils = [
        {
            img: <FontAwesomeIcon icon={faReact}/>,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "#8ec6d3"
        },
        {
            img: <FontAwesomeIcon icon={faOptinMonster}/>,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "#bbcbd7"
        },
        {
            img: <FontAwesomeIcon icon={faChalkboardTeacher}/>,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "#dbc6dd"
        },
        {
        //<i class="fab fa-opencart"></i>
            img: <FontAwesomeIcon icon={faPeopleArrows}/>,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "rgb(142 211 198)"
        },
        {
            img: <FontAwesomeIcon icon={faCode}/>,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "rgb(215 193 187)"
        },
        {
            img: <FontAwesomeIcon icon={faFigma}/>,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "rgb(176 206 168)"
        }
    ]
    return (
        <div className={cl.ollSkils}>
            {skils.map(s => {
                // return <div className={cl.wrappSkil} >
                return <div className={cl.wrappSkil} style={{background: s.background}}>
                    <span>{s.img}</span>
                    <p>{s.name}</p>
                    <div>{s.desc}</div>
                </div>
            }
            )}
            <img src="" alt=""/>

        </div>
    )
}