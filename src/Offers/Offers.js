import React from 'react';

function Offers(props) {
    return (
        <div className="flex flex-row h-screen justify-between bg-[#FCF9F2]">
            <img src="/Offers/LeftSide.svg" alt="LeftSide" className="Lside" />
            <div className="flex flex-col">
                <div className="text-[42px] font-bold text-[#1D3072] mt-14">Get best opportunities</div>
                <div className="text-[14px] font-semibold text-center mt-4">Check the offers and get the chance</div>
                <div className="text-[14px] font-semibold text-center">to show people your skills</div>
            </div>
            <img src="/Offers/RightSide.svg" alt="RightSide" className="Lside w-[22%]" />
        </div>
    );
}

export default Offers;