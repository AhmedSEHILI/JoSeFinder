import React from 'react';

function Bg(props) {
    return (
             <div className="relative ">
                <img src="/Landing/RightSvg.svg" alt="" className="absolute right-0 w-[65%]" />
                <img src="/Landing/elec.svg" alt="" className="absolute top-96 mt-9 w-[13.3%] bottom-0" />
                <img src="/Landing/window.svg" alt="" className="absolute translate-x-[-50%] left-[50%] top-[480px] mt-9 w-[30%]" />
             </div>
    );
}

export default Bg;