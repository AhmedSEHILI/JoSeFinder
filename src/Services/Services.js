import React from 'react';
import Bg from './Bg';
import CardJob from './CardJob';
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
                <div className="BigCard relative h-[42%] w-[35%] mb-[7%]">
                    <div className='hov1'>
                        <img src="/Services/Card1.svg" alt="Card1" className='Card1 w-[23%] h-[56%] absolute z-10 left-[20%] top-0 rotate-[-20deg] hover:left-[18.6%] hover:w-[24.5%]' />
                        <div className="absolute clr z-0 w-[21%] h-[50%] left-[20.4%] top-[3.1%] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card2.svg" alt="Card2" className='Card1 w-[23%] h-[56%] absolute z-10 left-[59%] rotate-[-20deg] hover:left-[57.9%] hover:w-[24.5%]'/>
                        <div className="absolute clr z-0 w-[21%] h-[50%] left-[59.6%] top-[3.1%] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card3.svg" alt="Card3" className='Card2 w-[23%] h-[56%] absolute z-10 left-0 top-[47.5%] rotate-[20deg] hover:top-[45%] hover:w-[24.5%]'/>
                        <div className="absolute clr z-0 w-[21%] h-[50%] left-[1.8%] top-[48.1%] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card4.svg" alt="Card4" className='Card2 w-[23%] h-[56%] absolute z-10 left-[40%] top-[47.5%] rotate-[20deg] hover:top-[45%] hover:left-[38.4%] hover:w-[24.5%]'/>
                        <div className="absolute clr z-0 w-[21%] h-[50%] left-[40.2%] top-[48.1%] bg-[#FD1F4A] opacity-0"></div>
                    </div>
                    <div className="hov1">
                        <img src="/Services/Card5.svg" alt="Card5" className='Card2 w-[23%] h-[56%] absolute z-10 left-[78.6%] top-[47.5%] rotate-[20deg] hover:top-[45%] hover:left-[77.2%] hover:w-[24.5%]'/>
                        <div className="absolute clr z-0 w-[21%] h-[50%] left-[79%] top-[48.1%] bg-[#FD1F4A] opacity-0"></div>
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