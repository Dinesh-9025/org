import React from 'react';
import card1 from 'src/assets/Images/card1.jpg';
import card2 from 'src/assets/Images/card2.jpg';
import card3 from 'src/assets/Images/card3.jpg';
// import RightArrow from "src/assets/Images/RightArrow.png"

export default function RightSide() {
  return (
    <div className="z-1000">
      <section className="rounded-lg w-full z-1000">
        <div className="grid grid-cols-2 gap-4 rounded-lg">
          <div className="bg-[white] rounded-lg">
            <div className="rounded-t-lg p-[10px] text-sm text-red-600 flex items-center justify-between border-b-[2px] border-b-black">
              CT-152 Digital Therapeutic Advisory Board Meeting
              <span className="text-blue-500 text-[0.75rem]">
                35% Completed
              </span>
            </div>

            <div className="p-[15px] rounded-lg object-contain ">
              <img className="rounded-2xl h-[200px]" src={card1} alt="card1"></img>
            </div>
          </div>

          <div className="bg-[white] rounded-lg">
            <div className="bg-[white] rounded-lg">
              <div className="rounded-t-lg p-[10px] text-sm text-red-600 flex items-center justify-between border-b-[2px] border-b-black">
                NEI 2022 Symposium
                <span className="text-blue-500 text-[0.75rem]">
                  45% Completed
                </span>
              </div>

              <div className="p-[15px] rounded-lg object-contain">
                <img
                  className="rounded-2xl flex w-full h-[200px]"
                  src={card2}
                  alt="card1"
                ></img>
              </div>
            </div>
          </div>

          <div className="bg-[white] rounded-lg">
            <div className="bg-[white] rounded-lg">
              <div className="rounded-t-lg p-[10px] text-sm text-red-600 flex items-center justify-between border-b-[2px] border-b-black">
                NEI Advisory Board Meeting
                <span className="text-blue-500 text-[0.75rem]">
                  65% Completed
                </span>
              </div>

              <div className="p-[15px] rounded-lg object-contain">
                <img
                  className="rounded-2xl w-full h-[200px]"
                  src={card3}
                  alt="card1"
                ></img>
              </div>
            </div>
          </div>

          <div className="bg-[white] rounded-lg">
            <div className="bg-[white] rounded-lg">
              <div className="rounded-t-lg p-[10px] text-sm text-red-600 flex items-center justify-between border-b-[2px] border-b-black">
                MIRAI Trial Topline Data Meeting
                <span className="text-blue-500 text-[0.75rem]">
                  55% Completed
                </span>
              </div>

              <div className="p-[15px] rounded-lg ">
                <img className="rounded-2xl h-[200px]" src={card1} alt="card1"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
