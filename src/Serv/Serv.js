import React from 'react';
import Bg from './Bg';
import Card from './Card';
import { motion } from 'framer-motion';



function Serv(props) {

    const cards = [
        {visibility:"invisible",rotation:"", image:"", job:"", numOffers:"", key:1},
        {visibility:"",rotation:"llgg:rotate-[-20deg]", image:"/Services/Builder.svg", job:"Builder", numOffers:22, key:1},
        {visibility:"invisible",rotation:"", image:"", job:"", numOffers:"", key:1},
        {visibility:"",rotation:"llgg:rotate-[-20deg]", image:"/Services/painter.svg", job:"Painting", numOffers:30, key:1},
        {visibility:"invisible",rotation:"", image:"", job:"", numOffers:"", key:1},
        {visibility:"invisible llgg:visible",rotation:"llgg:rotate-[20deg]", image:"/Services/Electricien.svg", job:"Electricity", numOffers:25, key:1},
        {visibility:"visible llgg:invisible",rotation:"llgg:rotate-[20deg]", image:"/Services/Electricien.svg", job:"Electricity", numOffers:25, key:1},
        {visibility:"",rotation:"llgg:rotate-[20deg]", image:"/Services/Mechanicien.svg", job:"Mechanic", numOffers:43, key:1},
        {visibility:"visible llgg:invisible",rotation:"llgg:rotate-[20deg]", image:"/Services/Carpenter.svg", job:"Carpentry", numOffers:14, key:1},
        {visibility:"invisible llgg:visible",rotation:"llgg:rotate-[20deg]", image:"/Services/Carpenter.svg", job:"Carpentry", numOffers:14, key:1}
    ]

    return (
        <div className="bg-[#FCF9F2]">
            <Bg/>
            <div className="flex flex-col items-center">
                <motion.h3 className="text-4xl llgg:text-5xl font-bold text-[#1D3072] pt-16 pb-2"
                    animate= {{x:['-100vw', 0]}}
                >Explore services by category</motion.h3>
                <div className="font-semibold text-sm llgg:text-md w-[400px] pt-2 pb-5 lg:pb-10 text-center">Have you a skill ? propose your services to get the most exiting job in the country !</div>
                <div className="">
                        <div className="fullGrid grid grid-cols-5 pt-10">
                            {
                                cards.map((card) => <div className={`rot1 ${card.rotation}`}><Card visibility={card.visibility} 
                                                                                                image={card.image}
                                                                                                job={card.job}
                                                                                                numOffers={card.numOffers}/></div>)

                            }
                        </div>

                </div>            
            </div>
            
        </div>
    );
}

export default Serv;