import React, { useState } from 'react';
import logo from 'src/assets/Images/logo.jpg';
import HomeIcon from 'src/assets/Images/HomeIcon.svg';
import AdvisoryActive from 'src/assets/Images/AdvisoryActive.svg';
import Connect from 'src/assets/Images/Connect.svg';
import Learn from 'src/assets/Images/Learn.svg';
import Community from 'src/assets/Images/Community.svg';
import Filter from 'src/assets/Images/Filter.svg';
import Notification from 'src/assets/Images/Notification.svg';
import Setting from 'src/assets/Images/Setting.svg';

export default function Header() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="ml-[30px] mr-[30px]">
      <div className="w-[100%] flex items-center ">
        <section className="w-[45%] ">
          <div className="flex w-[100%]">
            <div className="w-[15%] pl-[0px] p-[10px]">
              <span className="">
                <img className="w-[300px]" src={logo} alt={'logo'} />
              </span>
            </div>
            <div className="border-[0.40px]"></div>

            <div className="w-[85%] p-[20px]">
              <ul className="flex items-center justify-between w-[100%] text-sm">
                <li className="flex items-center justify-between font-light font-bold">
                  <img
                    className="mr-[10px]"
                    src={HomeIcon}
                    alt="HomeIcon"
                  ></img>{' '}
                  Home
                </li>
                <li className="flex items-center justify-between font-light">
                  <img className="mr-[10px]" src={Learn} alt="Learn"></img>Learn
                </li>
                <li className="flex items-center justify-between font-light">
                  <img className="mr-[10px]" src={Connect} alt="Connect"></img>
                  Connect
                </li>
                <li className="flex items-center justify-between font-light">
                  <img
                    className="mr-[10px]"
                    src={Community}
                    alt="Community"
                  />
                  Exchange
                </li>
                <li className="flex items-center justify-between font-light text-[#2C69DE]">
                  <img
                    className="mr-[10px]"
                    src={AdvisoryActive}
                    alt="AdvisoryActive"
                  ></img>
                  Advisory Board
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-[55%]">
          <div className="w-[100%] flex flex-row gap-8 justify-end">
            {/* <div className="w-[30%]"></div> */}

            {/* <div className="flex "> */}
            <div className="relative">
              <div className="flex items-center justify-between whitespace-nowrap">
                <button
                  className="flex items-center justify-between rounded-md pr-[13px] pl-[13px] pt-[8px] pb-[8px] text-[0.80rem] font-light bg-[#E6E9ED] relative"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <img className="mr-[10px]" src={Filter} alt="filter" />
                  Filter Product
                </button>
                <br />
              </div>
              {filterOpen && (
                  <div className=" w-[200px] w-min-[200px] h-max-[120px] h-min-[100px] bg-[#FFFFFF] rounded-md pr-[5px] absolute z-[100] mt-[10px] shadow-xl shawdow-stone-[500]">
                    <ul className="flex grid grid-cols-1 gap-2 text-sm font-light ">
                      <li className='hover:bg-sky-500 p-[5px] cursor-pointer pl-[10px]'>Product Name 1</li>
                      <li className='hover:bg-sky-500 p-[5px] cursor-pointer pl-[10px]'>Product Name 2</li>
                      <li className='hover:bg-sky-500 p-[5px] cursor-pointer pl-[10px]'>Product Name 3</li>
                    </ul>
                  </div>
                )}
                </div>
              <div>
                <input
                  className="rounded-md border-[1px] p-[7px] text-sm w-[200px]"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <div className="flex items-center justify-content">
                {/* <div>
                  <b className="animate-ping bg-red-600">.</b>
                </div> */}
                <img
                  className="cursor-pointer h-[22px] w-[22px] min-h-[20px] min-w-[20px]"
                  src={Notification}
                  alt="notification"
                />
              </div>
              <div className="flex items-center justify-content">
                <img
                  className="cursor-pointer h-[22px] w-[22px] min-h-[20px] min-w-[20px]"
                  src={Setting}
                  alt="Setting"
                />
              </div>
              <div className="flex items-center text-sm gap-r-[0px] nowrap whitespace-nowrap">
                <p className="w-[30px] h-[30px] rounded-full bg-blue-500 p-[5px] mr-[2px] text-[0.75rem] text-white flex items-center justify-content">
                  JS
                </p>
                John Smith
              </div>
            {/* </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
