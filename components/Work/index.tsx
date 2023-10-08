import React from "react";
import WorkCard from "../common/work-card/WorkCard";
import ScrollLayout from "../common/scroll-layout/ScrollLayout";
import { WorkCardList } from "@/utils/WorkCardList";

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-[calc(100vh-64px)] mt-[50px] w-full scroll-m-[65px]"
    >
      <h2
        className="lexend text-[30px] mb-6 text-white capitalize w-fit m-auto"
        data-aos="fade-up"
      >
        Explore My Digital Playground
      </h2>
      <div className="my-20">
        <ScrollLayout fixScrollWidth={330} gap={30}>
          {WorkCardList?.map((item) => (
            <WorkCard workCardItem={item} key={1} />
          ))}
        </ScrollLayout>
      </div>
    </section>
  );
};

export default Work;
