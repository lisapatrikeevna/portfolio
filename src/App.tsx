import React from 'react';
import './App.css';
import {Header} from "./common/Header";
import {Offer} from "./components/Offer/Offer";
import {SkilsSection} from "./components/Skils/Skils";
import {MyWorks} from "./components/myWorks/MyWorks";
import {FormWrap} from "./components/Form/FormWrap";
import CaroselQ from "./components/carousel/carousel";
import {Footer} from "./common/Footer";
import {About} from "./components/about/About";


function App() {
    return (
        <>
            <Header/>
            <Offer/>
            <SkilsSection/>
            <About/>
            <MyWorks/>
            <FormWrap/>
            <Footer/>
        </>
    );
}

export default App;
