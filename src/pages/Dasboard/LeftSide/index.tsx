import React, { useState } from 'react';
import card1 from 'src/assets/Images/card1.jpg';
import card2 from 'src/assets/Images/card2.jpg';
import card3 from 'src/assets/Images/card3.jpg';
// eslint-disable-next-line @nx/enforce-module-boundaries
import InputField from 'src/components/Cards/Form/input';
import FilterIcon from 'src/assets/Images/FilterIcon.svg';

export default function LeftSide() {
  const [openTab, setOpenTab] = React.useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="rounded-xl bg-white min-h-[600px]">
        <div className="p-[15px] text-[white] rounded-t-xl bg-[#1a3b6f] flex items-center justify-between h-[50px]">
          <p className="">List of Items to Complete</p>
          <button
            className="p-[5px] rounded-md text-[0.75rem] bg-blue-200 text-[black]"
            onClick={togglePopup}
          >
            Schedule of Events
          </button>
        </div>

        <div className="p-[15px] rounded-b-xl">
          <div className="flex">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-1 flex-row"
                role="tablist"
              >
                <li className=" text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 rounded block leading-normal ${
                      openTab === 1 ? 'bg-blue-200' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Pending
                  </a>
                </li>

                <li className=" text-center">
                  <a
                    className={`text-xs font-bold uppercase px-5 py-3 rounded block leading-normal ${
                      openTab === 2 ? 'bg-blue-200' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Completed
                  </a>
                </li>
              </ul>
              <hr className="pb-3" />

              <section className="flex justify-end pb-3">
                <div className="relative">
                  <div className="flex">
                    <button
                      className=" flex items-center justify-between rounded-md pr-[13px] pl-[13px] pt-[8px] pb-[8px] text-[0.80rem] font-light bg-[#E6E9ED] relative"
                      onClick={() => setFilterOpen(!filterOpen)}
                    >
                      {' '}
                      <img
                        className="mr-[10px]"
                        src={FilterIcon}
                        alt="filter"
                      />
                      Filter
                      <span className="ml-[10px] bg-[#1a3b6f] text-[white] h-5 w-5 rounded-full">
                        2
                      </span>
                    </button>
                  </div>
                  {filterOpen && (
                    <div className=" absolute ">
                    <div className=" absolute rounded-md bg-[#FFFFFF] h-[250px] w-[400px] mt-5 z-[100] p-5">
                      <section>
                        <div className="flex w-[100%] pb-3">
                          <h1 className="font-bold w-[50%]">Filter</h1>
                          <button className="bg-[#21B2AC] text-[white] pr-5 w-[25%] pl-5 pt-1 pb-1 rounded-md text-sm mr-3">
                            Cancel
                          </button>
                          <button className="bg-[#1a3b6f] text-[white] w-[25%] pr-5 pl-5 pt-1 pb-1 rounded-md text-sm">
                            Apply
                          </button>
                        </div>
                        <hr />

                        <div className="flex grid col pt-4">
                          <label className="text-[#6B6B6B] text-sm ">
                            By Status
                          </label>
                          <select className="p-2 rounded-md mt-2 border-[1px] text-sm text-[#BCC1C9]">
                            <option value="option1 ">Option 1</option>
                            <option value="option2" selected>
                              By Status
                            </option>
                            <option value="option3">Option 3</option>
                          </select>
                          <label className="mt-3 text-[#6B6B6B] text-sm">
                            Adboard
                          </label>
                          <select className="p-2 rounded-md mt-2 border-[1px] text-sm text-[#BCC1C9]">
                            <option value="option1">Option 1</option>
                            <option value="option2" selected>
                              Adboard
                            </option>
                            <option value="option3">Option 3</option>
                          </select>
                        </div>
                      </section>
                    </div>
                    </div>
                  )}
                </div>
              </section>

              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                <div className=" flex bg-slate-[100] rounded-2xl">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? 'block' : 'hidden '}
                      id="link1"
                    >
                      <div className="grid grid-cols-1 gap-4 rounded-lg flex absoulte">
                        <div className="rounded-2xl border-[1px]">
                          <div className="object-contain w-[100%] flex gap-4 p-[20px] pb-[10px]">
                            <img
                              className="rounded-lg w-[100px]"
                              src={card1}
                              alt={'card'}
                            ></img>
                            <p className="w-[80%] ">
                              Review Content: CT-152 Digital Therapeutic
                              Advisory Board Meeting
                              <span className="text-[0.75rem] font-thin flex flex-col">
                                {' '}
                                Review Content: CT-152 Digital Therapeutic
                                Advisory Board Meeting
                              </span>
                            </p>
                            <div className="w-[20%] text-right">
                              {/* <input className="p-[20px] rounded-lg" type={"checkbox"}/> */}
                              <InputField checked={false} type={'checkbox'} />
                            </div>
                          </div>
                          <hr />
                          <div className="p-[6px] w-[100%] flex">
                            <div className="w-[70%] text-[0.75rem] font-bold flex items-center justify-center">
                              <span className="font-light ">Date:</span>
                              {''}
                              Jan 1, 2023
                            </div>
                            <span className="text-blue-500 text-[0.75rem] w-[30%] mr-[8px] text-right">
                              45% Completed
                            </span>
                          </div>
                        </div>

                        <div className="rounded-2xl border-[1px]">
                          <div className="object-contain w-[100%] flex gap-4 p-[20px] pb-[10px]">
                            <img
                              className="rounded-lg w-[100px]"
                              src={card1}
                              alt={'card'}
                            ></img>
                            <p className="w-[80%] ">
                              Review Content: CT-152 Digital Therapeutic
                              Advisory Board Meeting
                              <span className="text-[0.75rem] font-thin flex flex-col">
                                {' '}
                                Review Content: CT-152 Digital Therapeutic
                                Advisory Board Meeting
                              </span>
                            </p>
                            <div className="w-[20%] text-right">
                              <InputField checked={false} type={'checkbox'} />
                            </div>
                          </div>
                          <hr />
                          <div className="p-[6px] w-[100%] flex">
                            <div className="w-[70%] text-[0.75rem] font-bold flex items-center justify-center">
                              <span className="font-light ">Date:</span>
                              {''}
                              Jan 1, 2023
                            </div>
                            <span className="text-blue-500 text-[0.75rem] w-[30%] mr-[8px] text-right">
                              45% Completed
                            </span>
                          </div>
                        </div>

                        <div className="rounded-2xl border-[1px]">
                          <div className="object-contain w-[100%] flex gap-4 p-[20px] pb-[10px]">
                            <img
                              className="rounded-lg w-[100px]"
                              src={card1}
                              alt={'card'}
                            ></img>
                            <p className="w-[80%] ">
                              Review Content: CT-152 Digital Therapeutic
                              Advisory Board Meeting
                              <span className="text-[0.75rem] font-thin flex flex-col">
                                {' '}
                                Review Content: CT-152 Digital Therapeutic
                                Advisory Board Meeting
                              </span>
                            </p>
                            <div className="w-[20%] text-right">
                              <InputField checked={false} type={'checkbox'} />
                            </div>
                          </div>
                          <hr />
                          <div className="p-[6px] w-[100%] flex">
                            <div className="w-[70%] text-[0.75rem] font-bold flex items-center justify-center">
                              <span className="font-light ">Date:</span>
                              {''}
                              Jan 1, 2023
                            </div>
                            <span className="text-blue-500 text-[0.75rem] w-[30%] mr-[8px] text-right">
                              45% Completed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={openTab === 2 ? 'block' : 'hidden'}
                      id="link2"
                    >
                      <div className="grid grid-cols-1 gap-4 rounded-lg flex">
                        <div className="rounded-2xl border-[1px]">
                          <div className="object-contain w-[100%] flex gap-4 p-[20px] pb-[10px]">
                            <img
                              className="rounded-lg w-[100px]"
                              src={card1}
                              alt={'card'}
                            ></img>
                            <p className="w-[80%] ">
                              Review Content: CT-152 Digital Therapeutic
                              Advisory Board Meeting
                              <span className="text-[0.75rem] font-thin flex flex-col">
                                {' '}
                                Review Content: CT-152 Digital Therapeutic
                                Advisory Board Meeting
                              </span>
                            </p>
                            <div className="w-[20%] text-right">
                              <InputField checked={true} type={'checkbox'} />
                            </div>
                          </div>
                          <hr />
                          <div className="p-[6px] w-[100%] flex">
                            <div className="w-[70%] text-[0.75rem] font-bold flex items-center justify-center">
                              <span className="font-light ">Date:</span>
                              {''}
                              Jan 1, 2023
                            </div>
                            <span className="text-[#17CA53] text-[0.75rem] w-[30%] mr-[8px] text-right">
                              100% Completed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-9000">
          <div className="p-4 bg-white rounded-md h-[500px] w-[600px]">

            <div className="flex grid col-1">
              <div className='flex justify-between'>
              <h1 className="text-xl font-bold mb-4 ">Model</h1>
              
              <span className='rotate-45 text-2xl cursor-pointer mr-2'onClick={togglePopup} >+</span>
              </div>
              <div className='h-[380px] p-2 rounded-md mb-2 border-[1px]'>
                <p>
                We are grateful to each of you for your dedication to sharing your clinical experience with your peers and for championing the reason to believe in treatment. As you explore the information and resources of this hub, please reach out to share your thoughts on the utility. We look forward to the year ahead as we continue our shared mission of improving the lives of your patients.
                </p>
                </div>
              <div className="flex justify-end">
                <button
                  className="pr-4 pl-4 pt-2 pb-2 text-white rounded bg-[#1a3b6f]"
                  onClick={togglePopup}
                >
                  Submit
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
