import React from 'react';
import { Link } from "react-router-dom";

function ButtNav(props) {
    return (
        <div>
            <a href={props.hrf} className="text-[10px] lg:text-[0.8vw] hover:bg-[#3D45E2] hover:bg-opacity-70 px-2 py-[1px] lg:px-4 lg:py-1 rounded-3xl border-[3.5px] border-transparent hover:text-white text-[#0009B2] font-bold hover:border-[3.5px] hover:border-[#1D3072]">{props.name}</a>
        </div>
    );
}

export default ButtNav;