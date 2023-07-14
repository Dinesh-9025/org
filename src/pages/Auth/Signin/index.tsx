import React from 'react';
import logo from 'src/assets/Images/logo.jpg'
// import { Link } from 'react-router-dom';


export default function Signin() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <section className="w-3/5 h-2/5 flex flex-col items-center justify-center ">
        <div className="w-3/5 flex justify-center mb-[30px] ">
          <span className='w-[200px]'>
            <img src={logo} alt={"logo"} />
          </span>
        </div>
        <div className="bg-slate-50 w-[500px] rounded-md p-[30px] border border-gray-100 mb-[15px]">
          <div className="w-[100] mb-[20px] items-center flex">
            <label className="w-[30%] text-sm text-thin text-gray-500">
              Email<span className="mandatory-icon text-red-500">*</span>
            </label>
            <input className="w-[70%] h-[40px] rounded-md border" type="email" />
          </div>

          <div className="w-[100] mb-[20px] items-center flex">
            <label className="w-[30%] text-sm text-thin text-gray-500">
              Password<span className="mandatory-icon text-red-500">*</span>
            </label>
            <input className="w-[70%] h-[40px] rounded-md border" type="password" />
          </div>

          <div className=" w-[100%] flex justify-center bg-[#1a3b6f] p-[10px] text-[white] rounded-md">
            <button>LOG IN</button>
          </div>
        </div>
        <div className='flex space-x-2'>
            <p className='text-thin text-sm'>Not yet Register?</p> 
            <p className='font-semibold text-sm text-[#1a3b6f] cursor-pointer'>Create Account</p>
        </div>
      </section>
    </div>
  );
}
