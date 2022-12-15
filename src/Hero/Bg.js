import React from 'react';
import Nav from '../Nav';

function Bg(props) {
    return (
             <div className="relative ">
                
                <div className="absolute right-0 w-[800px] cs:w-[100px] lg:w-[1180px]">
                    {/* <div className=" absolute w-screen flex flex-row-reverse pt-[3.3%] pr-16 z-20">
                        <Nav />
                    </div> */}
                    <div className="absolute top-[36px] right-8 lg:top-[60px] "><Nav /></div>
                     <img src="/Landing/RightSvg.svg" alt="" className="z-10" />
                </div>
                <img src="/Landing/elec.svg" alt="" className="absolute top-[270px] lg:top-96 lg:mt-10 bottom-0 w-[180px] lg:w-[255px]" />
                <img src="/Landing/window.svg" alt="" className="absolute translate-x-[-50%] left-[50%] top-[350px] lg:top-[480px] mt-9 w-[350px] lg:w-[600px]" />
             </div>
    );
}

export default Bg;