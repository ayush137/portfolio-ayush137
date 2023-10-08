import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import SKillGPT from "../../../public/skillgpt.png";
import { workCardItem } from "@/utils/WorkCardList";
import Link from "next/link";

type WorkCardProps = {
  workCardItem: workCardItem;
};
const WorkCard: React.FC<WorkCardProps> = (props) => {
  const { workCardItem } = props;
  const skills = ["Next.js", "Strapi", "tailwind css"];
  return (
    <Link
      className="flex flex-col group cursor-pointer w-fit"
      target="_blank"
      href={workCardItem?.url}
    >
      <div className={`${styles["card-layout"]} overflow-hidden flex`}>
        <Image
          src={workCardItem?.img}
          alt="skillgpt"
          className="object-cover group-hover:scale-105 transition-all duration-500 "
          width={300}
          height={275}
        />
      </div>
      <div className="relative">
        <div className="bg-[#d4cfcf66] flex flex-col backdrop-blur-[15px] min-h-[70px] w-[300px] rounded-[0px_0px_10px_10px] opacity-50 p-[10px]"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 p-[10px] flex flex-col items-center">
          <div className="group-hover:text-[#40E0D0] uppercase top-0 left-0 right-0 bottom-0 block lexend text-[16px] md:text-[18px] leading-[180%] text-white opacity-100 ">
            {workCardItem?.title}
          </div>
          <div className="flex gap-[10px] items-center">
            {workCardItem?.skills?.map((item, index) => {
              return (
                <>
                  {index ? <div className="h-[10px] w-[1px] bg-white" /> : ""}
                  <span
                    key={index}
                    className="text-[12px] leading-[160%] text-white uppercase"
                  >
                    {item}
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
