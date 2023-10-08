import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

type ScrollLayoutPropsType = {
  children: React.ReactNode;
  fixScrollWidth: number;
  gap: number;
};

const ScrollButtons = dynamic(
  () => import("@/components/common/scroll-layout/ScrollButtons"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const ScrollLayout: React.FC<ScrollLayoutPropsType> = (props) => {
  const { children, fixScrollWidth, gap } = props;
  const [scroll, setScroll] = useState({
    left: false,
    right: false,
  });

  const handleParentScroll = () => {
    const el = document.getElementById(`hscroll`);
    const tempScroll = scroll;
    if (el) {
      if (el?.scrollWidth - el?.clientWidth - el?.scrollLeft < 1) {
        tempScroll.right = false;
      } else {
        tempScroll.right = true;
      }
      if (el?.scrollLeft <= 0) {
        tempScroll.left = false;
      } else {
        tempScroll.left = true;
      }
    }
    setScroll({ ...tempScroll });
  };

  useEffect(() => {
    console.log("hello", window);
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => handleParentScroll);
    }
  }, []);

  return (
    <div>
      <div
        className="flex overflow-x-scroll scroll-smooth"
        style={{ gap: gap }}
        //   className={`${style["service-wrap"]}`}
        id="hscroll"
        onScroll={handleParentScroll}
      >
        {children}
      </div>
      <ScrollButtons
        fixScrollWidth={fixScrollWidth}
        scroll={scroll}
        handleParentScroll={handleParentScroll}
      />
    </div>
  );
};

export default ScrollLayout;
