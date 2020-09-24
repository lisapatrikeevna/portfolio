import React from 'react';
import cl from './myWorks.module.css'
import style from "../../common/commonStyle.module.css";

export const MyWorks= ()=>{
return(
    <div className={`${style.container} ${cl.container}`}>
        <h3>my works</h3>
        <Main/>
    </div>

)
}
export const Main= ()=>{
    const skils=[
        {img:"src", name:"some name" ,desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},
        {img:"src", name:"some name" ,desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"},
        {img:"src", name:"some name" ,desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"}
    ]
    return(
        <div className={cl.ollSkils}>
            {skils.map(s=> {return<div className={cl.wrappSkil}>
                    <span>{s.img}</span>
                    <p>{s.name}</p>
                    <div>{s.desc}</div>
                </div>}
            )}
            <img src="" alt=""/>

        </div>
    )
}