import Image from "next/image";
import React, { useState } from "react";
import DoubleCaret from "../../public/double-caret-down.svg";
import {
  ScrollToIdFunction,
  email,
  githubURL,
  linkedinURL,
} from "@/utils/common";

const links = [
  {
    short: "In",
    long: "Linkedin",
    url: linkedinURL,
  },
  {
    short: "Git",
    long: "Github",
    url: githubURL,
  },
  {
    short: "@",
    long: "Email",
    url: email,
  },
];

const Intro = () => {
  const [show, setShow] = useState(true);
  return (
    <section id="intro" className="h-[calc(100vh-64px)]">
      <div className="min-h-[80vh] flex flex-col justify-center relative items-center">
        <div className="w-fit sm:w-full">
          <h1
            data-aos="fade-down"
            data-aos-duration={500}
            className="mb-[0.25em] text-[2em] sm:text-[3em] lg:text-[3em] xl:text-[5em] lexend font-black z-10 w-fit sm:w-[90%] text-[#40E0D0] capitalize leading-[1.1]"
          >
            Ayush Bhadoriya
          </h1>
          <h2
            data-aos="fade-right"
            className="text-[1.5em] leading-[1.2] sm:text-[3em] lg:text-[4em] xl:text-[5em] manrope font-black w-fit sm:w-[90%]"
            data-aos-duration={500}
          >
            Crafting Digital Magic
          </h2>
        </div>
        {show ? (
          <div
            onClick={() => {
              ScrollToIdFunction("about", true);
              // setTimeout(() => setShow(false), 1000);
            }}
            className="absolute cursor-pointer bottom-[0px] left-[calc(50%-36px)] opacity-75 animate-bounce hover:animate-none hover:opacity-100 transition-all duration-500"
          >
            <div className="flex">
              <Image
                src={DoubleCaret}
                alt="arrow-down"
                width={70}
                height={70}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className="absolute right-0 z-10 hidden sm:block"
          data-aos="fade-left"
        >
          <div className="flex flex-col">
            {links?.map((link) => {
              return (
                <a
                  key={link?.short}
                  href={link?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group pl-[16px] pr-[16px] pt-[8px] pb-[8px] flex justify-end items-center gap-1 text-white hover:text-[#40E0D0] i--sc"
                >
                  <span className="i--sc-short">{link?.short}</span>
                  <span className="i--sc-long">{link?.long}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="fill-white group-hover:fill-[#40E0D0]"
                      viewBox="0 0 256 256"
                    >
                      <path d="M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"></path>
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
