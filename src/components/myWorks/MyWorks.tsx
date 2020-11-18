import React, {useState} from 'react';
import cl from './myWorks.module.css'
import style from "../../common/commonStyle.module.css";
import CaroselQ from "../carousel/carousel";
import swss from '../../image/girl.png';
import clock from '../../image/clock.jpg';
import {ImgBlock} from "../imgBlock/imgBlock";
import { Route, NavLink } from 'react-router-dom';
import {faEye, faHandPointUp, faPeopleArrows} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MyWorks = () => {
   let [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <div className={`${style.container} ${cl.container}`}>
                <h3>my works</h3>
                <Main open={open} setOpen={setOpen}/>
               <Route path={'/carousel'} render={()=><CaroselQ name={'works'} display={open}/>}/>
               <Route path={'/imgBlock'} render={()=><ImgBlock display={open}/>}/>
            </div>

        </>
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
            img: clock,
            name: "desing",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            link: './carousel',
            hover: <FontAwesomeIcon icon={faEye} />,
        },
        {
            img: clock,
            name: "some name",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            link: '/imgBlock',
            hover: <FontAwesomeIcon icon={faHandPointUp} />,
        },
        {
            img: clock,
            name: "all types work",
            desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            link: 'https://lisapatrikeevna.github.io/portfolio/',
            hover: <p>click</p>,
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


// type openBlockType={
//     name:any
//     open:boolean
// }
//
// export const MyWorks = () => {
//     //let [open, setOpen] = useState<boolean>(false)
//     let [openBlock, setOpen] = useState<Array<openBlockType>>([
//         {name:CaroselQ,open: false},
//         {name:ImgBlock,open:false},
//         {name:ImgBlock,open:false},
//     ])
//     return (
//         <>
//             <div className={`${style.container} ${cl.container}`}>
//                 <h3>my works</h3>
//                 <Main openBlock={openBlock} setOpen={setOpen}/>
//                 {/*<CaroselQ name={'works'} display={openBlock}/>*/}
//                 {/*<ImgBlock display={openBlock}/>*/}
//             </div>
//
//         </>
//     )
// }
// type mainType = {
//     setOpen: (open: boolean) => void
//     // open: boolean
//     openBlock:Array<openBlockType>
// }
// type workType={
//     key:string
//     img:any
//     name:string
//     desc:string
// }
// export const Main = (props: mainType) => {
//     const works:Array<workType> = [
//         {
//             key:"CaroselQ",
//             img: clock,
//             name: "desing",
//             desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
//             // body: <CaroselQ name={'works'} display={props.open}/>
//         },
//         {
//             key:"ImgBlock",
//             img: clock,
//             name: "some name",
//             desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
//             // body: <ImgBlock display={props.open} />
//         },
//         {
//             key:"ImgBlock",
//             img: clock,
//             name: "all types work",
//             desc: "Ut ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
//             // body: <CaroselQ name={'works'} display={props.open}/>
//         }
//     ];
//
//     return (
//         <div className={cl.MyWorks}>
//             <div className={`${style.container} ${cl.ollWorks}`}>
//                 {works.map((s,i )=> {
//                     const onchengeOpen = () => {
//                         //debugger
//                         if(props.openBlock.find(s.key===name)) {
//                             props.setOpen(!props.openBlock.open)
//                         }
//                     };
//                         return (
//                             <div key={s.key} className={cl.wrappWork}>
//                                 <span onClick={onchengeOpen}><img src={s.img} alt="" className={cl.example}/></span>
//                                 <p>{s.name}</p>
//                                 <div>{s.desc}</div>
//                             </div>
//                             // { !open && <>{s.body}</> }
//                         )
//                     }
//                 )}
//             </div>
//         </div>
//     )
// }