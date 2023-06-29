import React from "react";
import bg from "../../public/images/background/bg.jpg";
import SideBarTop from "./sideBarTop";
import SideBarBottom from "./sideBarBottom";

function SideBar() {
  return (
    <div>
      <main>
        <div className="flex lg:flex-col px-12 h-full">
          <SideBarTop />
        </div>
        <div className="border_bottom"></div>
        <div className="text-center px-8 pt-5 overflow-scroll ">
          <SideBarBottom />
        </div>
      </main>
      <style jsx>{`
        .border_bottom {
          border-bottom: 1px solid #383838;
          width: 80%;
          margin: auto;
        }
      `}</style>
    </div>
  );
}

export default SideBar;
