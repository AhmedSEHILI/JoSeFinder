import React from 'react';
import CardJob from './CardJob';

function Bg(props) {
    return (
        <div className="relative h-screen w-screen bg-[#FCF9F2]">
            {/* <div className="absolute left-96 top-10"> <CardJob /></div> */}
           
            <img src="/Services/LeftShape.svg" alt="leftshapes" className="absolute w-[15.1%]" />
            <img src="/Services/RightShape.svg" alt="RightShape" className="absolute bottom-0 right-0 w-[22%]" />
            <img src="/Services/Woman.svg" alt="Woman" className="absolute bottom-0 left-[25.1%] w-[12.3%]" />
            <img src="/Services/ShapeBig.svg" alt="shapes" className="absolute top-[35%] right-[13%] " />
            <img src="/Services/ShapeBig.svg" alt="shapes" className="absolute top-[35%] left-[20%] " />
            <img src="/Services/ShapeSmall.svg" alt="shapes" className="absolute bottom-[16%] right-[18%] " />
        </div>
    );
}

export default Bg;