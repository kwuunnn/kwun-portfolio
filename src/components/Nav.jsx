import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Nav = ({ openNav }) => {
  return (
    <div className="w-full sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between h-full w-4/5 mx-auto">
        <h1 className="flex-[0.8] cursor-pointer sm:text-[25px] font-bold text-white">
          Kwun Hei <span className=" text-yellow-300">Ching</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Experience</div>
        <div className="nav-link">Projects</div>
        <div className="nav-link">Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
