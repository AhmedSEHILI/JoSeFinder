import React from 'react';
import { useScroll, motion } from "framer-motion"
import { useEffect } from 'react';


function Frame(props) {
    const { scrollYProgress } = useScroll()


    return (
        
        <div className="h-[3000px]">
            <motion.div className="w-10 h-10 bg-red-400"
                style={{ scaleX: scrollYProgress }}        
            >
                df
            </motion.div>
        </div>
    );
}

export default Frame;