import React from 'react';

function LoginCard(props) {
    return (
        <div className="w-[550px] h-[730px] bg-[#FCF9F2] border-solid border-[8px] border-[#CED3EB] rounded-[25px] flex flex-col">
            <h2 className="">Log in</h2>
            <p className="">Hello friend ! You can trust everything. Let’s get in touch</p>
            <input type="text" className="w-8"/>
            
        </div>
    );
}

export default LoginCard;