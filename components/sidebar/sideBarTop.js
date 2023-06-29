import React from "react";
import bg from "../../public/images/background/bg.jpg";
import Tilt from "react-parallax-tilt";

function SideBarTop() {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <main>
        <Tilt>
          <div
            className="rounded-lg w-6/12 self-center m-auto p-2"
            style={{ backgroundColor: "#4e4c4d" }}
          >
            <img src="/images/emoji/avatar4.png" alt="profile" />
            {/* <img src="/images/crop-profile.png" alt="profile" /> */}
          </div>
        </Tilt>
        <h1 className="text-xl py-5 text-center">Swaroop Chandra</h1>
        <div className="bg-stone-800 px-5 py-2 rounded-lg mb-8 m-auto w-9/12 flex justify-center">
          <p className="moving">I'm a Web </p>
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
      `}</style>
    </div>
  );
}

export default SideBarTop;
