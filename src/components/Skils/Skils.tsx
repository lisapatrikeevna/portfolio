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
        <div className={cl.MySkils} id={'skils'}>
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
            name: "React",
            desc: "TypeScript, Redux, Axios, Firebase, REST API, JavaScript, Storybook, Redux-thunk",
            background: "#8ec6d3"
        },
        {
            img: <FontAwesomeIcon icon={faOptinMonster}/>,
            name: "soft skills",
            desc: "do not kill the client for the edits made the day before the delivery of the project",
            background: "#bbcbd7"
        },
        {
            img: <FontAwesomeIcon icon={faChalkboardTeacher}/>,
            name: "some name",
            desc: "Matireal-UA, Semantic-ui, Formik, Redux-form",
            background: "#dbc6dd"
        },
        {
        //<i class="fab fa-opencart"></i>
            img: <FontAwesomeIcon icon={faPeopleArrows} />,
            name: "some name",
            desc: "team gathering and drawing up of those tasks",
            background: "rgb(142 211 198)"
        },
        {
            img: <FontAwesomeIcon icon={faCode}/>,
            name: "EDUCATION",
            desc: "IT-INCUBATOR: React, Redux , TypeScript, Redux-thunk, Rest API . Codecademy: JS .  wayup: HTML, CSS",
            background: "rgb(215 193 187)"
        },
        {
            img: <FontAwesomeIcon icon={faFigma}/>,
            name: "Figma & Adobe Photoshop",
            desc: "basic knowledge for creating websites and layouts",
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