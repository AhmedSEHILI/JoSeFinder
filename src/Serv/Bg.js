import React from 'react';

function Bg(props) {
    return (
        <div className="relative">
            <img src="/Services/LeftShape.svg" alt="leftshapes" className="absolute top-0 left-0 w-[295px]" />
            <img src="/Services/RightShape.svg" alt="RightShape" className="absolute top-[455px] right-0 w-[450px]" />
            <img src="/Services/Woman.svg" alt="Woman" className="absolute left-[300px] top-[529px] w-[25   0px]" />
            <img src="/Services/ShapeBig.svg" alt="shapes" className="absolute top-[380px] right-[350px] " />
            <img src="/Services/ShapeBig.svg" alt="shapes" className="absolute top-[380px] left-[450px] " />
            <img src="/Services/ShapeSmall.svg" alt="shapes" className="absolute top-[700px] right-[450px] " />
        </div>
    );
}

export default Bg;