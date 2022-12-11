import React from 'react';
import ButtNav from './ButtNav';
import {Link } from "react-router-dom";


function Nav(props) {
    return (
        <div className="flex flex-row gap-7 lg:gap-16">
            <div className="flex flex-row">
                <ButtNav name ="Home"/>
                <ButtNav name ="Services"/>
                <ButtNav name ="Offers" />
                <ButtNav name ="Reviews" />
                <ButtNav name ="About us" />
                <ButtNav name ="Sign up" />
            </div>
            <button className="login flex flex-row text-[10px] lg:text-[0.8vw] hover:bg-[#FCF9F2] px-1 py-[2px] lg:px-4 lg:py-1 rounded-3xl border-[3.5px] border-transparent text-white hover:text-[#0009B2] font-bold hover:border-[3.5px] hover:border-[#1D3072]">
                <img src="/Landing/IconPurple.svg" alt="" className="imgPrpl hidden pr-3 w-[45%]" />
                <img src="/Landing/IconWhite.svg" alt="" className="imgWht pr-3 w-[45%]" />
                login
            </button>

            {/* <div className="absolute flex flex-row justify-between w-[390px] h-[90px]">
                    <button className="text-[15px] w-[180px] h-[45px] hover:bg-[#3D45E2] hover:bg-opacity-0 pl-4 pr-4 pt-[4.5px] pb-2 rounded-3xl border-[3.5px] border-transparent hover:text-[#3D45E2] text-white bg-[#3D45E2] font-bold hover:border-[3.5px] hover:border-[#3D45E2]">Create Account</button>
                    <button className="text-[15px] w-[180px] h-[45px] hover:bg-[#3D45E2] pl-4 pr-4 pt-[4.5px] pb-2 rounded-3xl border-[3.5px] border-[#3D45E2] hover:text-white text-[#0009B2] font-bold hover:border-[3.5px] hover:border-[#3D45E2]">Login</button>
            </div> */}
        </div>
    );
}

export default Nav;