import React from "react";
import cl from './imgStyle.module.scss';
import './imgStyle.scss';
import clock from '../../image/clock.jpg';
import aqua from '../../image/aqua.jpg';
import ing from '../../image/ing.jpg';
import tcategory from '../../image/ttcategoryy.png';
import webs from '../../image/webs.jpg';
import perwozilka from '../../image/perwozilka.jpg';

type propsType={
    display:boolean
}
export const ImgBlock=(props:propsType)=>{
    return(
            <div className='dFlex wrap'>
                <div  className="item"><span className="wrapp"><img src={clock} alt="clock"/></span></div>
                <div  className="item"><span className="wrapp"><img src={aqua} alt="clock" /></span></div>
                <div  className="item"><span className="wrapp"><img src={ing} alt="clock" /></span></div>
                <div  className="item"><span className="wrapp"><img src={tcategory} alt="clock" /></span></div>
                <div  className="item"><span className="wrapp"><img src={webs} alt="clock" /></span></div>
                <div  className="item"><span className="wrapp"><img src={perwozilka} alt="clock" /></span></div>
            </div>
    )
}