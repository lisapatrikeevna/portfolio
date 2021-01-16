import React from "react";
import './fullCycle.scss';
import clock from '../../image/clock.jpg';
import aqua from '../../image/aqua.jpg';
import ing from '../../image/ing.jpg';
import fl from '../../image/fl.jpg';
import fl1 from '../../image/fl1.jpg';
import ov from '../../image/ov.jpg';
import tcategory from '../../image/ttcategoryy.png';
import webs from '../../image/webs.jpg';
import pechati from '../../image/pechati.jpg';
import product from '../../image/product.jpg';
import silky from '../../image/silky.jpg';


type propsType={
    display:boolean
}
export const FullCicle=(props:propsType)=>{
    return(
            <div className='wrap fullBlock'>
                <div  className="item"><img src={product} alt="clock" /></div>
                <div  className="item"><img src={clock} alt="clock"/></div>
                <div  className="item"><img src={aqua} alt="clock" /></div>
                <div  className="item"><img src={ing} alt="clock" /></div>
                <div  className="item"><img src={ov} alt="clock" /></div>
                <div  className="item"><img src={tcategory} alt="clock" /></div>
                <div  className="item"><img src={webs} alt="clock" /></div>

                <div  className="item"><img src={fl} alt="clock" /></div>
                <div  className="item"><img src={fl1} alt="clock" /></div>
                <div  className="item"><img src={pechati} alt="clock" /></div>
                <div  className="item"><img src={silky} alt="clock" /></div>
            </div>
    )
}