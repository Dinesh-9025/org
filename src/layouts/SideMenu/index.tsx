import React, { useState } from 'react';
import ArrowRight from 'src/assets/Images/ArrowRight.jpg'
import ArrowLeft from 'src/assets/Images/ArrowLeft.jpg'


const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen === true ? 'w-[300px] h-screen' : 'w-0'
      } bg-[#193B6E] transform transition-transform duration-300 ease-in-out `}
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'}}
    >
        { !isOpen ? (<div className='p-4 cursor-pointer' onClick={toggleMenu} >
            <img className='w-[20px]' src={ArrowRight} alt='open'/>
            open
        </div>) :
        (
        <section>
          <div
            className={`p-4 ${
              isOpen ? 'bg-[#193B6E]' : ''
            } text-white flex justify-between`}
          >
            {isOpen === true && (
              <h2 className="text-xl font-bold ">Side Menu</h2>
            )}
            <div className="flex">
              <button
                className={`z-1000 ${isOpen ? 'bg-[#193B6E]' : ''} object-contain object-fit `}
                onClick={toggleMenu}
              >
                {' '}
                <img className='w-[20px] rounded-full p-1 bg-[white]' src={ArrowLeft} alt='open'/>
              </button>
            </div>
          </div>

          <ul className="p-4 text-white ">
            <li className="py-2">Dashboard</li>
            <li className="py-2">Profile</li>
            <li className="py-2">Setting</li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default SideMenu;
