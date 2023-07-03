import React, { useState } from "react";
// import bg from "../../public/images/background/bg.jpg";
// import { useRouter } from "next/router";
import { MenuItems } from "../constants/nav";
import About from "../about/About";
import SideBar from "../sidebar/sideBar";

function index() {
  const [click, setClick] = useState({
    title: "About",
    url: "",
    component: <About />,
  });
  // const router = useRouter();

  // console.log(router, "router");

  return (
    <div>
      <main>
        <div className="lg:flex pb-8 lg:p-0">
          <div className="lg:w-3/12 sidebar mx-5 lg:pt-8 lg:sticky lg:min-h-[44.5rem]">
            <SideBar />
          </div>

          <div
            className="lg:min-w-[69vw] sidebar lg:pt-4 mx-5 lg:sticky mt-5 lg:mt-0 lg:ms-6 lg:h-[44.5rem] "
            // style={{ height: "80vh" }}
          >
            <div
              className="flex place-content-center lg:place-content-start"
              style={{ justifyContent: "between", width: "100%" }}
            >
              <div className="flex lg:justify-start  lg:ms-10 ">
                <h1 className="text-3xl font-bold ms-10 w-4/12 leading-loose border_bottom flex lg:justify-start">
                  {click.title}
                </h1>
              </div>
              <ul className="nav_bar lg:w-8/12 w-full lg:absolute fixed inset-x-0 top-0 lg:rounded-tr-2xl lg:rounded-bl-2xl rounded-b-2xl">
                {MenuItems.map((it) => (
                  <li
                    className={`cursor-pointer ${
                      click.url == it.url ? "text-yellow-500" : "text-stone-500"
                    }`}
                    key={it.title}
                    onClick={() => setClick(it)}
                  >
                    {it.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start w-full lg:p-10 p-4 overflow-y-scroll ">
              {click.component}
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .sidebar {
          top: 60px;
          margin-bottom: 0;

          z-index: 1;
          border: 1px solid #383838;
          border-radius: 20px;
          background: #1e1e1f;
          display: flex;

          align-items: center;
          flex-direction: column;
        }
        .nav_bar {
          bottom: auto;
          background: #282829;
          left: auto;
          padding: 0 20px;
          box-shadow: none;
          border: 1px solid #383838;
          height: 4rem;
          padding: 20px;
          margin-top: -1px;
          margin-right: -1px;
          display: flex;
          justify-content: space-around;
          font-weight: 600;
          z-index: 5;
        }
        .border_bottom {
          border-bottom: 4px solid #dba813;
          width: fit-content;
          border-bottom-style: double;
          border-radius: 10%;
        }
      `}</style>
    </div>
  );
}

export default index;
