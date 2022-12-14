import React from 'react';
import Nav from '../Nav';
import Bg from './Bg';

function Hero(props) {
    return (
        <div className="relative">
             <Bg />
            <div className=" flex flex-col bg-red-300">
                <div className="text-3xl font-bold p-3">LOGO</div>
                <div className="flex flex-col">
                    <div className="text-5xl font-bold text-[#1D3072]">Find the jobs </div>
                    <div className="text-5xl font-bold text-[#1D3072]">that fits your life</div>
                    <div className="font-semibold text-md">Create free account to find thousands Jobs, Emplyment, & Career Oppurtunities arround you !  </div>
                    <div className="flex flex-row">
                        <div className="h-[45px] border-4 text-center leading-[4px] p-4 w-[175px] rounded-[25px] font-bold">Create Account</div>
                        <div className="h-[45px] border-4 text-center leading-[4px] p-4 w-[175px] rounded-[25px] font-bold">Login</div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Hero;