import React from "react";
import { RxCaretDown } from "react-icons/rx";


const Header = () => {
  return (
    <header className="p-[15px] shadow-xl">
      <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
        <div className="w-[50px] ">
          <img src="images/logo.svg" className="w-full" alt="" />
        </div>
        <div className="">
          <span className="font-bold border-b-[3px] border-[black]">
            Ratanada {' '}
          </span>
          Jodhpur, Rajasthan, India <RxCaretDown fontSize={25} className="inline font-bold text-[#fc8019]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
