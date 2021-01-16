import React, {useState} from 'react';
import cl from './myWorks.module.css'
import style from "../../common/commonStyle.module.css";
import CaroselQ from "../carousel/carousel";
import clock from '../../image/clock.jpg';
import taxi from '../../image/taxi.jpg';
import aqaart from '../../image/aqaart-pro.jpg';
import {ImgBlock} from "../imgBlock/imgBlock";
import { Route, NavLink } from 'react-router-dom';
import {faEye, faHandPointUp, faPeopleArrows} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FullCicle } from '../full cycle/fullCycle';

export const MyWorks = () => {
   let [openFullCicle, setOpenFullCicle] = useState<boolean>(false)
   let [open, setOpen] = useState<boolean>(false)

    return (
        <div className={cl.projekt} id='projekt'>
            <div className={`${style.container} ${cl.container}`}>
                <h3>my works</h3>
                <Main open={open} setOpen={setOpen}/>
               <Route path={'/carousel'} render={()=><CaroselQ name={'works'} display={open}/>}/>
               <Route path={'/fullcycle'} render={()=><FullCicle display={open}/>}/>
               <Route path={'/imgBlock'} render={()=><ImgBlock display={open}/>}/>
            </div>

        </div>
    )
}
type mainType = {
    setOpen: (open: boolean) => void
    open: boolean
}
type workType={
    img:any
    name:string
    desc:string
    link:string
    hover: any
}
export const Main = (props: mainType) => {
    const works:Array<workType> = [
        {
            img: taxi,
            name: "desing",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            link: './carousel',
            // hover: <FontAwesomeIcon icon={faEye} />,
            hover: <FontAwesomeIcon icon={faHandPointUp} />,
        },
        {
            img: aqaart,
            name: "full cycle",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            link: '/fullcycle',
            hover: <FontAwesomeIcon icon={faHandPointUp} />,
        },
        {
            img: clock,
            name: "all types work",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            link: '/imgBlock',
            // hover: <p>click</p>,
            hover: <FontAwesomeIcon icon={faHandPointUp} />,
        }
    ];
    return (
        <div className={cl.MyWorks}>
            <div className={`${style.container} ${cl.ollWorks}`}>
                {works.map(s => {
                        return (
                            <div className={cl.wrappWork}>
                                {/*<span onClick={onchengeOpen}><img src={s.img} alt="" className={cl.example}/></span>*/}
                                <NavLink to={s.link} className={cl.blend}><img src={s.img} alt="" className={cl.example}/><span >{s.hover}</span></NavLink>
                                <p>{s.name}</p>
                                <div>{s.desc}</div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

