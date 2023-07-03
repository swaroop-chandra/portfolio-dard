import React from "react";
import bg from "../../public/images/background/bg.jpg";
import Tilt from "react-parallax-tilt";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

function SideBarTop({ check, setCheck }) {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <main className="flex lg:flex-col items-center justify-between">
        <Tilt>
          <div
            className="rounded-2xl self-center m-auto p-2"
            style={{ backgroundColor: "#4e4c4d" }}
          >
            <img src="/images/emoji/avatar4.png" alt="profile" />
            {/* <img src="/images/crop-profile.png" alt="profile" /> */}
          </div>
        </Tilt>
        <div className="w-full flex flex-col justify-center ms-5">
          <h1 className="text-lg lg:py-5 lg:text-center font-semibold">
            Swaroop Chandra
          </h1>
          <div className="bg-stone-800 lg:px-5 lg:py-2 rounded-lg lg:mb-8 lg:m-auto lg:w-[12rem] w-[10rem]  px-3 py-1 mt-2 flex justify-center">
            <p className="moving">I'm a Web </p>
          </div>
        </div>
        <div
          className="info_more_btn lg:hidden"
          style={{ top: " 80px", right: "20px" }}
          onClick={() => setCheck(!check)}
        >
          {check ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </main>
      <style jsx>{`
        .moving {
          color: white;
          overflow: hidden;
          position: relative;
          width: fit-content;
          font-size: 12px;
        }
        .moving::after {
          content: "Developer";
          display: inline-block;
          animation: animation 8s steps(9) infinite;
          width: 0;
          color: #ead971;
        }

        @keyframes animation {
          25% {
            content: "Developer";
            width: 8ch;
          }
          45% {
            width: 0;
          }
          70% {
            content: "Specialist";
            width: 8ch;
          }
          85% {
            width: 0;
          }
        }

        .moving::before {
          content: "";
          display: inline-block;
          animation: blinking 0.4s linear alternate infinite;
          width: 2px;
          height: 100%;
          background-color: white;
          position: absolute;
          right: 0;
        }

        @keyframes blinking {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .info_more_btn {
          position: absolute;
          border-radius: 0 15px;
          font-size: 13px;
          color: #ffdb70;
          background: linear-gradient(
            to bottom right,
            hsl(0, 0%, 25%) 0%,
            hsla(0, 0%, 25%, 0) 50%
          );
          padding: 10px;
          box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.25);
          transition: 0.25s ease;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default SideBarTop;
