import React from 'react';
import banner from 'src/assets/Images/banner.png';
import RightSide from './RigtSide';
import LeftSide from './LeftSide';

export default function Dashboard() {
  return (
    <div className=" w-full flex p-[15px] rounded-3xl bg-slate-100 flex-col ">
      <section className="w-full h-[400px] flex sticky mb-[20px]">
        <img className="rounded-2xl flex w-full object-cover z-0" src={banner} alt={'banner'} />
        <div className="absolute w-[40%] p-[50px] flex-col h-[100%] items-center justify-center flex bg-blue-900 bg-opacity-40 rounded-l-2xl">
          <h1 className="text-[white] text-xl font-bold mb-[10px]">
            Digital medicine provides both patients and their providers with
            insights that help inform treatment plans and encourage
            communication.
          </h1>
          <p className="text-[white] text-md">
            We are grateful to each of you for your dedication to sharing your
            clinical experience with your peers and for championing the reason
            to believe in treatment. As you explore the information and
            resources of this hub, please reach out to share your thoughts on
            the utility. We look forward to the year ahead as we continue our
            shared mission of improving the lives of your patients.
          </p>
        </div>
      </section>

      <section className=" grid-cols-3 gap-4 w-full flex">
        <div className='w-[40%] z-1000'>
          <LeftSide />
        </div>
        <div className='col-span-2 w-[60%] z-1000'>
          <RightSide />
        </div >
      </section>
    </div>
  );
}
