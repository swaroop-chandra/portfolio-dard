import React, { useEffect, useState } from "react";
import { ProjectItems } from "../constants/projectList";
import { SiGithub } from "react-icons/si";
import { TfiEye } from "react-icons/tfi";

function Projects() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    if (filter == "all") {
      setData(ProjectItems);
    } else {
      const dataFilter = ProjectItems.filter((pro) => pro.type == filter);
      setData(dataFilter);
    }
  }, [filter]);

  return (
    <div>
      <main>
        <ol className="capitalize flex gap-12 cursor-pointer pt-5 lg:pt-0 items-center h-10">
          {filter == "all" ? (
            <li
              className="text-amber-400 font-semibold text-lg"
              onClick={() => setFilter("all")}
            >
              Both
            </li>
          ) : (
            <li
              className="hover:text-orange-300 hover:font-light"
              onClick={() => setFilter("all")}
            >
              Both
            </li>
          )}
          {filter == "fe" ? (
            <li
              className="text-amber-400 font-semibold text-lg  lg:hidden flex"
              onClick={() => setFilter("fe")}
            >
              FE
            </li>
          ) : (
            <li
              className="hover:text-orange-300 hover:font-light  lg:hidden flex"
              onClick={() => setFilter("fe")}
            >
              FE
            </li>
          )}
          {filter == "fe" ? (
            <li
              className="text-amber-400 font-semibold text-lg  hidden lg:flex"
              onClick={() => setFilter("fe")}
            >
              Front End
            </li>
          ) : (
            <li
              className="hover:text-orange-300 hover:font-light  hidden lg:flex"
              onClick={() => setFilter("fe")}
            >
              Front End
            </li>
          )}
          {filter == "be" ? (
            <li
              className="text-amber-400 font-semibold text-lg  lg:hidden flex"
              onClick={() => setFilter("be")}
            >
              BE
            </li>
          ) : (
            <li
              className="hover:text-orange-300 hover:font-light  lg:hidden flex"
              onClick={() => setFilter("be")}
            >
              BE
            </li>
          )}
          {filter == "be" ? (
            <li
              className="text-amber-400 font-semibold text-lg hidden lg:flex"
              onClick={() => setFilter("be")}
            >
              Back End
            </li>
          ) : (
            <li
              className="hover:text-orange-300 hover:font-light hidden lg:flex"
              onClick={() => setFilter("be")}
            >
              Back End
            </li>
          )}
        </ol>
        <div className="overflow-y-scroll  lg:flex flex-wrap">
          {data.map((proj) => (
            <div className="lg:w-1/3 mt-12 lg:px-8 px-1" key={proj.title}>
              <div className="flip-card w-full">
                <div className="flip-card-inner">
                  <div className="flip-card-front rounded-3xl bg-transparent">
                    <img
                      src={proj.img}
                      alt="bg"
                      className="w-58 h-48 rounded-3xl bg-transparent"
                      //   style={{ transform: "scale(0.8)" }}
                    />
                  </div>
                  <div className="flip-card-back flex justify-center items-center rounded-3xl bg-transparent">
                    {proj.git && (
                      <a
                        href={proj.git}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub className="lg:w-6 lg:h-6 w-5 h-5  text-stone-500 hover:text-stone-200  rounded-md cursor-pointer" />
                      </a>
                    )}
                    {proj.url && (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TfiEye className="lg:w-7 lg:h-7 w-5 h-5  text-stone-500 hover:text-stone-200 rounded-md cursor-pointer ms-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <h2 className="text-lg mt-6 ms-3">{proj.title}</h2>
              <p className="text-xs font-extralight break-words ms-3 w-fit">
                {proj.message}
              </p>
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .flip-card {
          height: 180px;
          perspective: 1000px;
        }

        .flip-card-inner {
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color: #f0f0f0;
        }

        .flip-card-back {
          background-color: #2a2a2d;
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default Projects;
