import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.svg";
import { ScrollToIdFunction, linkedinURL, githubURL } from "@/utils/common";
const Header = () => {
  const sections = ["about", "work", "contact"];
  return (
    <nav className="pl-[20px] max-w-[1280px] m-auto pr-[20px] pt-[10px] pb-[10px] sticky top-0 left-0 h-[64px] backdrop-blur-lg w-full z-20">
      <div>
        <div className="flex justify-between items-center">
          <div className="p-[10px] hover:bg-[#ff03] rounded-[4px]">
            <Link href="/">
              <Image src={logo} width={24} height={24} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden md:flex gap-2 text-[#40E0D0] text-[14px] uppercase lexend">
              {sections?.map((section) => (
                <span
                  key={section}
                  onClick={() => ScrollToIdFunction(section, true)}
                  className="inline-block cursor-pointer pl-[20px] pr-[20px] pt-[12px] pb-[12px] hover:bg-[#ff03] hover:text-white rounded-[4px]"
                >
                  {section}
                </span>
              ))}
            </div>
            <div className="hidden md:block h-[25px] w-[1px] bg-[#ff03] ml-[8px] mr-[8px]"></div>
            <div className="flex gap-2">
              <Link href={linkedinURL} legacyBehavior>
                <a target="_blank">
                  <div className="group w-fit h-fit p-[10px] pr-[20px] pl-[20px] bg-[#40E0D01a] hover:bg-[#ff03] transition-all duration-100 rounded-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="fill-[#40E0D0] group-hover:fill-white transition-all duration-100"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                    </svg>
                  </div>
                </a>
              </Link>
              <Link href={githubURL} legacyBehavior>
                <a target="_blank">
                  <div className="group p-[10px] pr-[20px] pl-[20px] bg-[#40E0D01a] hover:bg-[#ff03] rounded-[4px] transition-all duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="fill-[#40E0D0] group-hover:fill-white transition-all duration-100"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
