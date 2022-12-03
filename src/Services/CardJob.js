import React from 'react';

function CardJob(props) {
    return (
        <div className="JobCard h-[200px] w-[150px] bg-slate-200 flex flex-col items-center justify-evenly">
            <div className="text-[22px] font-bold text-[#1D3072] mt-6"> Painting</div>
            <div className="text-[13px] font-semibold text-center">22 Offers</div>
            <img src="/Services/Painter.svg" alt="" className="mt-6" />
        </div>
    );
}

export default CardJob;