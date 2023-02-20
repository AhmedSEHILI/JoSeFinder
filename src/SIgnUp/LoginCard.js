import React from 'react';
import LoginButton from './LoginButton';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';



function LoginCard(props) {
    return (
        <div className="w-[550px] h-[730px] bg-[#FCF9F2] border-solid border-[8px] border-[#CED3EB] rounded-[25px] flex flex-col">
            <h2 className="font-extrabold text-5xl text-DarkBlue">Log in</h2>
            <p className="">Hello friend ! You can trust<br /> everything. Let’s get in touch</p>
            <div className="flex flex-col gap-3">
                <input type="text" placeholder="Email" className="h-14 w-[75%] rounded-[60px] border-[3.5px] border-MyGrey bg-MyGrey bg-opacity-25 px-6 placeholder:text-Grey placeholder:font-semibold placeholder:text-xl placeholder:pl-4"/>
                <input type="text" placeholder="Password" className="h-14 w-[75%] rounded-[60px] border-[3.5px] border-MyGrey bg-MyGrey bg-opacity-25 px-6 placeholder:text-Grey placeholder:font-semibold placeholder:text-xl placeholder:pl-4"/>
            </div>
            <LoginButton />
            <div className="flex flex-row gap-2">

            <FaFacebook style={{ fontSize: '2em', color: 'darkblue' }} />
            <FaInstagram style={{ fontSize: '2.1em', color: 'darkblue' }} />
            <FaGoogle style={{ fontSize: '2em', color: 'darkblue'}} />

        
            </div>
            <div className="flex flex-row">
                <p className="font-semibold text-lg">You don't have an account ? </p>
                <p className="font-bold text-lg">Sign Up</p>
            </div>
        </div>
    );
}

export default LoginCard;