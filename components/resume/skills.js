import React from "react";
import { TfiMedall } from "react-icons/tfi";

const Skills = () => {
  return (
    <div>
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 m-1">
            <TfiMedall />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Skills</h1>
          </div>
        </div>
        <div className="content_card p-5 w-full flex flex-wrap capitalize">
          <div className="w-6/12 p-4">
            <h4>React JS</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>Node JS</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>express</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>mySQL</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "90%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>Redux</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>context API</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>Next js</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "90%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>PostgreSQL</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "78%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>Javascript</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 p-4">
            <h4>HTML & CSS</h4>

            <div className="bg-gray-300 h-2 rounded-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-900"
                style={{ width: "100%", borderRadius: "0.5rem" }}
              ></div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .content_card {
          position: relative;
          background: linear-gradient(
            to bottom right,
            hsl(0, 0%, 25%) 0%,
            hsla(0, 0%, 25%, 0) 50%
          );
          border-radius: 14px;
          box-shadow: 0 16px 30px hsla(0, 0%, 0%, 0.125);
          cursor: pointer;
          z-index: 1;
        }
        .content_card::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: linear-gradient(
              to bottom right,
              hsla(240, 1%, 18%, 0.251) 0%,
              hsla(240, 2%, 11%, 0) 100%
            ),
            hsl(240, 2%, 13%);
          border-radius: inherit;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default Skills;
