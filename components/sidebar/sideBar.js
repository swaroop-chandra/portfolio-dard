import React, { useState } from "react";
import bg from "../../public/images/background/bg.jpg";
import SideBarTop from "./sideBarTop";
import SideBarBottom from "./sideBarBottom";

function SideBar() {
  const [check, setCheck] = useState(false);
  return (
    <div className="w-full">
      <main>
        <div className="flex lg:flex-col lg:px-12 h-full p-4">
          <SideBarTop check={check} setCheck={setCheck} />
        </div>
        <div className="lg:hidden">
          {check && (
            <>
              <div className="border_bottom"></div>
              <div className="text-center lg:ps-8 px-4 pt-5 overflow-scroll ">
                <SideBarBottom />
              </div>
            </>
          )}
        </div>
        <div className="hidden lg:flex flex-col">
          <div className="border_bottom"></div>
          <div className="text-center lg:ps-8 px-4 pt-5 overflow-scroll ">
            <SideBarBottom />
          </div>
        </div>
      </main>
      <style global jsx>{`
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
