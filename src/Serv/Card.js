import React from 'react';
import { motion } from 'framer-motion';

function Card({visibility, image, job, numOffers}) {
    return (
        <motion.div className={`contain relative border-black w-[160px] h-[210px] ${visibility}`}
            whileHover={{scale:1.2}}
            transition={{delay:0.1}}
        >
            <motion.div className="back absolute w-[134px] h-[187px] top-[11px] left-[13px] invisible bg-[#FDD0D2]"
            >
            </motion.div>
            <img src="/Services/cardBord.svg" alt="" className="absolute w-full h-full" />
            <div className="absolute text-center left-[50%] translate-x-[-50%] top-[16%]">
                 <h2 className="font-bold text-[#1D3072] text-[23px] pb-2">{job}</h2>
                 <h1 className="font-semibold text-sm">{numOffers} offers</h1>
            </div>
            <img src={image} alt="" className="absolute left-[50%] translate-x-[-55%] bottom-[5.4%]" />
        </motion.div>
    );
}

export default Card;