import React from 'react';

function CardJob(props) {
    return (
        <div className="relative w-[200px]">
            <div className="absolute flex flex-col left-[50%] top-[15%] translate-x-[-50%]">
                <div className="text-[24px] font-bold text-[#1D3072] text-center">Building</div>
                <div className="text-[12px] font-semibold text-center">22 offers</div>
                <img src="/Services/Painter.svg" alt="" className="w-[70%] m-auto pt-[45%]" />
            </div>
            <img src="/Services/BorderImg.svg" alt="" className="w-[80%]" />
        </div>
    );
}

export default CardJob;