import React from 'react';
import Nav from './Nav';
import Services from './Services/Services';
import {Link } from "react-router-dom";
import Offers from './Offers/Offers';


function LandBG(props) {
    return (
        <div className="">
            <div id="section1" className="realtive h-screen w-screen bg-[#FCF9F2]">

                <div className="absolute flex flex-col justify-between w-screen h-[58%] z-40">
                    <div className="flex flex-row-reverse mr-[3%] mt-[3%]"><Nav /></div> 
                    <div className="ml-[11%]">
                        <div className="text-[2.5vw] font-bold text-[#1D3072]">Find the jobs</div>
                        <div className="text-[2.5vw] font-bold text-[#1D3072]">that fits your life</div>
                        <div className="text-[1vw] font-semibold mt-1">Create free account to find thousands Jobs, Employment, & Career</div>
                        <div className="text-[1vw] font-semibold">Oppurtunities arround you !</div>
                        <div className="absolute bg-transparent w-[800px] h-[120px] top-[65px] left-0 z-50"></div>
                        <div className="absolute bg-transparent w-[190px] h-[500px] top-[65px] left-0 z-50"></div>
                        <div className="big flex flex-row justify-between w-[25%] h-[13%] mt-[4%] mb-[4%]">
                            <button className="z-40 lg:text-[0.8vw] md:text-[1vw] w-[46%] h-full hover:bg-opacity-0 text-center rounded-3xl border-[3.5px] border-transparent hover:text-[#3D45E2] text-white bg-[#3D45E2] font-bold hover:border-[3.5px] hover:border-[#3D45E2]">Create Account</button>
                            <button className="z-40 lg:text-[0.8vw] md:text-[1vw] w-[46%] h-full hover:bg-[#3D45E2] text-center rounded-3xl border-[3.5px] border-[#3D45E2] hover:text-white text-[#0009B2] font-bold hover:border-[3.5px] hover:border-[#3D45E2]">Login</button>
                            <div className="light z-30 absolute w-[650px] h-[500px] top-[65px] left-[70px]"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 pt-4 pl-6 text-[25px] font-bold">LOGO</div>
                <img src="/Landing/group1.svg" alt="" className="absolute right-0 w-[50%]" />
                <img src="/Landing/peintre.svg" alt="" className="absolute right-[1.8%] bottom-0 w-[12.3%]" />
                <img src="/Landing/window.svg" alt="" className="wind absolute w-[32%] mt-[3%]"/>
                <img src="/Landing/elec.svg" alt="" className="absolute left-0 bottom-0 w-[14%]" />
            </div>
            <Services/>
            <Offers />
        </div>
        
    );
}

export default LandBG;