import React from 'react';
import { Link } from "react-router-dom";

function ButtNav(props) {
    return (
        <div>
            <a href={props.hrf} className="text-[0.8vw] hover:bg-[#3D45E2] hover:bg-opacity-70 pl-4 pr-4 pt-1 pb-2 rounded-3xl border-[3.5px] border-transparent hover:text-white text-[#0009B2] font-bold hover:border-[3.5px] hover:border-[#1D3072]">{props.name}</a>
        </div>
    );
}

export default ButtNav;