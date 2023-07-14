import React from 'react';
import Header from './Header';
import Dashboard from '../pages/Dasboard';
import Footer from './Footer';
import SideMenu from './SideMenu';

export default function Layout() {
  return (
    <div className="flex sticky">
      {/* <div className="fixed"> */}
        <SideMenu />
      {/* </div> */}
      <div className="flex flex-col flex-grow">
        <section className="sticky top-0 bg-white border-b-[1px] z-40">
          <Header />
        </section>
        <section className="flex-grow overflow-y-auto px-[30px] pt-[20px] pb-[20px]">
          <Dashboard />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
