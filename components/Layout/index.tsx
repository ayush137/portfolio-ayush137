import React, { ReactNode } from "react";
import Header from "../Header";

type LayoutType = {
  children: ReactNode;
};
const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="mt-[85px] left-0 right-0 top-0 z-50 ">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
