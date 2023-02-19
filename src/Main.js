import React from 'react';
import Hero from './Hero/Hero';
import Offers from './Offers/Offers';
import Services from './Services/Services';
import Bg from './Serv/Bg';
import Serv from './Serv/Serv';
import Frame from './Frame';



function Main(props) {
    return (
        <div className=''> 
            <Hero />
            <Serv />
            {/* <Frame /> */}
        </div>
    );
}

export default Main;