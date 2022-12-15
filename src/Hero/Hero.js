import React from 'react';
import Nav from '../Nav';
import Bg from './Bg';

function Hero(props) {
    return (
        <div className="relative bg-[#FCF9F2]">
             <Bg />
            <div className=" flex flex-col gap-14 llgg:gap-44">
                <div className="text-3xl font-bold p-3 ">LOGO</div>
                <div className="flex flex-col gap-3 pl-20 llgg:pl-56">
                    <div className="text-4xl llgg:text-5xl font-bold text-[#1D3072]">Find the jobs </div>
                    <div className="text-4xl llgg:text-5xl font-bold text-[#1D3072]">that fits your life</div>
                    <div className="font-semibold text-sm llgg:text-md w-[500px] pt-2 pb-5 lg:pb-10">Create free account to find thousands Jobs, Employment, & Career Oppurtunities arround you !  </div>
                    <div className="flex flex-row gap-6 pb-[285px] lg:pb-[575px] llgg:pb-[435px]">
                        <div className="shad h-[45px] border-[3px] border-[#3D45E2] text-center leading-[5px] p-4 w-[190px] rounded-[25px] font-bold text-white bg-[#3D45E2] hover:bg-transparent hover:text-[#3D45E2] z-20">Create Account</div>
                        <div className="shad2 h-[45px] border-[3px] border-[#3D45E2] text-center leading-[5px] p-4 w-[190px] rounded-[25px] font-extrabold hover:font-bold text-[#3D45E2] hover:bg-[#3D45E2] hover:text-white z-20">Login</div>
                    </div>
                 </div>
            </div>
           
        </div>
    );
}

export default Hero;