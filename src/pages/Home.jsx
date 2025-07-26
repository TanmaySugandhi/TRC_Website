import React from "react";
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Slider from '../components/FullScreenSlider';

function Home(){
    return (
        <>
            <Slider/>
            <Home1/>
            <Home2/>
        </>
    );
}

export default Home;