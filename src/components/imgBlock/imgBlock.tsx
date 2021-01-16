import React from "react";
import './imgStyle.scss';
import clock from '../../image/clock.jpg';
import aqua from '../../image/aqua.jpg';
import ing from '../../image/ing.jpg';
import tcategory from '../../image/ttcategoryy.png';
import webs from '../../image/webs.jpg';
import perwozilka1 from '../../image/perwozilka1.jpg';
import perwozilka2 from '../../image/perwozilka2.jpg';

type propsType = {
    display: boolean
}
export const ImgBlock = (props: propsType) => {
    return (
            <div className='wrap'>
                <div className="item"><img src={aqua} alt="clock"/></div>
                <div className="item"><img src={tcategory} alt="clock"/></div>
                <div className="item"><img src={webs} alt="clock"/></div>
                <div className="item"><img src={clock} alt="clock"/></div>
                <div className="item"><img src={perwozilka1} alt="clock"/></div>
                <div className="item"><img src={ing} alt="clock"/></div>
                <div className="item"><img src={perwozilka2} alt="clock"/></div>
            </div>
    )
}