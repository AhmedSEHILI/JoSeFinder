import React from 'react';
import Nav from '../Nav';

function Bg(props) {
    return (
             <div className="relative ">
                <div className=" absolute w-screen flex flex-row-reverse pt-16 pr-16 z-10">
                    <Nav />
                </div>
                <img src="/Landing/RightSvg.svg" alt="" className="absolute right-0 w-[61.5%]" />
                <img src="/Landing/elec.svg" alt="" className="absolute top-96 mt-9 w-[13.3%] bottom-0" />
                <img src="/Landing/window.svg" alt="" className="absolute translate-x-[-50%] left-[50%] top-[480px] mt-9 w-[30%]" />
             </div>
    );
}

export default Bg;