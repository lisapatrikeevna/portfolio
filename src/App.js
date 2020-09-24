import React from 'react';
import './App.css';
import {Header} from "./common/Header";
import {Offer} from "./components/Offer";
import {SkilsSection} from "./components/Skils/Skils";
import {MyWorks} from "./components/myWorks/MyWorks";

function App() {
    return (
        <>
            <Header/>
            <Offer/>
            <SkilsSection/>
            <MyWorks/>
        </>
    );
}

export default App;
