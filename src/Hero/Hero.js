import React from 'react';
import Nav from '../Nav';
import Bg from './Bg';

function Hero(props) {
    return (
        <div className="relative">
            <div className="absolute flex flex-col z-10">
                <div className="w-screen flex flex-row-reverse pt-16 pr-16 ">
                    <Nav />
                </div>
            </div>
            <Bg />
        </div>
    );
}

export default Hero;