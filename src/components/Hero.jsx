import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-4/5 mx-auto h-full content-center">
        <div>
          <h1 className="text-[35px] sm:text-[50px] md:text-[70px] text-white font-bold">
            Hi, I'm <span className=" text-yellow-300">Kwun Hei!</span>
          </h1>
          <TextEffect />
          {/* <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold bg-primary text-black flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
