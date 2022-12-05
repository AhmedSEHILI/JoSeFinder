import React from 'react';
import Bg from './Bg';
import './index.css';


function Services(props) {
    return (
        <div id="sec2" className="relative ">
            <div className="absolute z-40 flex flex-col w-scren h-screen w-screen items-center justify-between">
                <div>
                  <div className="text-[28px] lg:text-[42px] font-bold text-[#1D3072] mt-[10%]">Explore offers by category</div>
                  <div className="text-[12px] lg:text-[14px] font-semibold text-center mt-[3%]">Have you a skill ? propose your services to get the most</div>
                  <div className="text-[12px] lg:text-[14px] font-semibold text-center">exiting job in the country !</div>
                </div>
                <div className="BigCard relative h-[380px] w-[670px] mb-40">
                    <div className='hov1'>
                        <img src="/Services/Card1.svg" alt="Card1" className='Card1 absolute z-10 left-[130px] top-0 rotate-[-20deg] hover:left-[123px] hover:w-[163px]' />
                        <div className="absolute clr z-0 w-[137px] h-[191px] left-[136px] top-[13px] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card2.svg" alt="Card2" className='Card1 absolute z-10 left-[390px] rotate-[-20deg] hover:left-[383px] hover:w-[163px]'/>
                        <div className="absolute clr z-0 w-[137px] h-[191px] left-[396px] top-[13px] bg-[#FD1F4A] opacity-0"></div>

                    </div>
                    <div className="hov1">
                        <img src="/Services/Card3.svg" alt="Card3" className='Card2 absolute z-10 left-0 top-[180px] rotate-[20deg] hover:top-[170px] hover:w-[163px]'/>
                        <div className="absolute clr z-0 w-[137px] h-[191px] left-[13px] top-[183px] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card4.svg" alt="Card4" className='Card2 absolute z-10 left-[260px] top-[180px] rotate-[20deg] hover:top-[170px] hover:left-[253px] hover:w-[163px]'/>
                        <div className="absolute clr z-0 w-[137px] h-[191px] left-[266px] top-[183px] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card5.svg" alt="Card5" className='Card2 absolute z-10 left-[520px] top-[180px] rotate-[20deg] hover:top-[170px] hover:left-[513px] hover:w-[163px]'/>
                        <div className="absolute clr z-0 w-[137px] h-[191px] left-[526px] top-[183px] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    
                </div>
                <div className="Explore flex flex-col h-[10%]">
                     <div className="txt text-[14px] font-bold text-center">Explore more offers</div>
                     <img src="/Services/Explore.svg" alt="ExploreButton" className="Exp h-[30%] opacity-0 lg:block hidden" />
                </div>
                
            </div>


            <Bg />
            
        </div>
    );
}

export default Services;