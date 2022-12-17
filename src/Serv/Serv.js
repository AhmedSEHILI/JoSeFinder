import React from 'react';
import Bg from './Bg';
import Card from './Card';



function Serv(props) {
    return (
        <div className="">
            <Bg/>
            <div className="flex flex-col items-center">
                <h3 className="text-4xl llgg:text-5xl font-bold text-[#1D3072] pt-16 pb-2">Explore services by category</h3>
                <div className="font-semibold text-sm llgg:text-md w-[400px] pt-2 pb-5 lg:pb-10 text-center">Have you a skill ? propose your services to get the most exiting job in the country !</div>
                <div className="">
                        <div className="fullGrid grid grid-cols-5 pt-10">
                            <Card rotation="invisible"/>
                            <div className="rot1 rotate-[-20deg]"><Card rotation=""/></div>
                            <Card rotation="invisible"/>
                            <div className="rot1 rotate-[-20deg]"><Card rotation=""/></div>
                            <Card rotation="invisible"/>
                            <div className="rot1 rotate-[20deg]"><Card rotation=""/></div>
                            <Card rotation="invisible"/>
                            <div className="rot1 rotate-[20deg]"><Card rotation=""/></div>
                            <Card rotation="invisible"/>
                            <div className="rot1 rotate-[20deg]"><Card rotation=""/></div>
                        </div>

                </div>            
            </div>
            
        </div>
    );
}

export default Serv;