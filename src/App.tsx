import React from 'react';
import './App.css';
import {Header} from "./common/Header";
import {Offer} from "./components/Offer/Offer";
import {SkilsSection} from "./components/Skils/Skils";
import {MyWorks} from "./components/myWorks/MyWorks";
import {FormWrap} from "./components/Form/FormWrap";
import CaroselQ from "./components/carousel/carousel";


function App() {
    return (
        <>
            <Header/>
            <Offer/>
            <SkilsSection/>
            <MyWorks/>
            <FormWrap/>

        </>
    );
}

export default App;
