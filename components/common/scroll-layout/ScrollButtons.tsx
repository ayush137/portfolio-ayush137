import React, { useEffect } from "react";

type ScrollButtonPropsType = {
  scroll: {
    left: boolean;
    right: boolean;
  };
  fixScrollWidth: number;
  handleParentScroll: () => void;
};
const ScrollButtons: React.FC<ScrollButtonPropsType> = (props) => {
  const { scroll, fixScrollWidth, handleParentScroll } = props;
  useEffect(() => {
    handleParentScroll();
  }, []);
  const scrollLeft = () => {
    const el = document.getElementById(`hscroll`);
    if (el) {
      el.scrollLeft -= fixScrollWidth;
    }
  };
  const scrollRight = () => {
    const el = document.getElementById(`hscroll`);
    if (el) {
      el.scrollLeft += fixScrollWidth;
    }
  };
  return (
    <>
      {!scroll?.left && !scroll?.right ? (
        ""
      ) : (
        <div className="max-w-[1124px] mx-auto px-[20px] mt-[20px] flex justify-end items-center gap-[10px]">
          <button
            onClick={scrollLeft}
            disabled={!scroll?.left}
            className={`border bg-black w-[35px] h-[35px] rounded-[10px] flex justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="25"
              height="25"
              fill={scroll?.left ? "white" : "#5C5F62"}
              //   fill={scroll?.left ? "white" : "#5C5F62"}
            >
              <rect width="256" height="256" fill="none" />
              <path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            disabled={!scroll?.right}
            className={`border bg-black w-[35px] h-[35px] rounded-[10px] flex justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={scroll?.right ? "white" : "#5C5F62"}
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollButtons;
