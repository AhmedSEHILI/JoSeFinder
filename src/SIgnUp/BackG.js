import React from 'react';
import LoginCard from './LoginCard';

function BackG(props) {
    return (
        <div className="relative h-[929px] w-screen">
            <img src="/SignUp/Group 45.svg" alt="" className="absolute left-16 top-10" />
            <img src="/SignUp/Ellipse 32.svg" alt="" className="absolute left-[550px] top-40" />
            <img src="/SignUp/Group 47.svg" alt="" className="absolute right-12 top-16" />
            <img src="/SignUp/Ellipse 32.svg" alt="" className="absolute left-14 bottom-12" />

            <div className="absolute h-full w-full flex flex-row items-center justify-around gap-16 mt-6">
              
                <img src="/SignUp/Workers.svg" alt="" className="" />
                <div className="">
                    <LoginCard />
                </div>

            </div>
            

            <div className="background h-full"></div>
        </div>
    );
}

export default BackG;