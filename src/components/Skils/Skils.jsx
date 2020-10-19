import React from 'react';
import cl from './skils.module.css'
import style from "../../common/commonStyle.module.css";

export const SkilsSection = () => {
    return (
        <div className={cl.MySkils}>
            <div className={`${style.container} ${cl.container}`}>
                <h3>my skils</h3>
                <Main/>
            </div>
        </div>
    )
}
export const Main = () => {
    const skils = [
        {
            img: "src",
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "#8ec6d3"
        },
        {
            img: "src",
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "#bbcbd7"
        },
        {
            img: "src",
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            background: "#dbc6dd"
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