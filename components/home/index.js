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
        <div className="lg:flex">
          <div className="lg:w-3/12 sidebar">
            <SideBar />
          </div>

          <div className="lg:w-9/12 sidebar ms-10 " style={{ height: "80vh" }}>
            <div
              className="flex "
              style={{ justifyContent: "between", width: "100%" }}
            >
              <h1 className="text-3xl font-bold ms-10 w-4/12 leading-loose border_bottom">
                {click.title}
              </h1>
              <ul className="nav_bar w-8/12">
                {MenuItems.map((it) => (
                  <li
                    className={`cursor-pointer ${
                      click.url == it.url ? "text-yellow-500" : "text-stone-500"
                    }`}
                    onClick={() => setClick(it)}
                  >
                    {it.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start w-full p-10 overflow-scroll ">
              {click.component}
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .sidebar {
          position: sticky;
          top: 60px;
          min-height: 90vh;
          height: 100%;
          margin-bottom: 0;
          padding-top: 30px;
          z-index: 1;
          border: 1px solid #383838;
          border-radius: 20px;
          background: #1e1e1f;
          display: flex;

          align-items: center;
          flex-direction: column;
        }
        .nav_bar {
          position: absolute;
          bottom: auto;
          background: #282829;
          top: 0;
          left: auto;
          right: 0;
          border-radius: 0 20px;
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
