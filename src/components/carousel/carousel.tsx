import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hand from '../../image/1HO.jpg';
import taxi from '../../image/taxi.jpg'
import fl1 from './../../image/fl1.jpg';
import fl from './../../image/fl.jpg';
import perevoz from '../../image/perevoz.jpg';
import pnevma from '../../image/Pn.jpg';
import pechati from '../../image/pechati.jpg';
import './works.css';

type propsType={
    name:string
    display:boolean
}
type allWorksType={
    img:object
    desk:string
}
const CaroselQ =(props:propsType)=> {
    let blockStyle={
        display: props.display?' block ':' none'
    }
   // const allWorks<Array<allWorksType>> =[
    const allWorks =[
        {
            img: hand,
            desk: '1 hand'
        },
        {
            img: pnevma,
            desk: 'PnevmaLux servise'
        },
        {
            img: fl,
            desk: 'flowers shop'
        },
        {
            img: fl1,
            desk: 'flowers shop 1'
        },
        {
            img: pechati,
            desk: 'pechati servise'
        },
            ];
    const itemwork=allWorks.map(i=> <div className="itemWork">
        <img src={i.img} />
        <p className="legend">{i.desk}</p>
    </div> )
        return (
            // <Carousel className={props.name} >
            <Carousel className={props.name} >
                {itemwork}
            </Carousel>
        );
}
export  default CaroselQ;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));