import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold text-primary mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-300">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-[19px] text-slate-300 w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              mollitia, eligendi cum nam quis voluptatum! Ducimus dolorum
              debitis, assumenda aperiam tenetur dolore eum voluptatem at
              necessitatibus in rem odio fugiat.
            </p>
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold bg-primary text-black flex items-center space-x-2">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0">
          <Image
            src="/me.jpg"
            alt="me"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-full h-full object-contain"
          />
          <div className="absolute w-full h-full z-[10] bg-primary top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
