import React from "react";
import { TfiBook } from "react-icons/tfi";

const Education = () => {
  return (
    <div>
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 w-10 h-10  m-1">
            <TfiBook />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Education</h1>
          </div>
        </div>
        <ol className="lg:ms-16 ms-12">
          <li className="timeline_item">
            <h4>DCT Academy</h4>
            <span>2019 — 2020</span>
            <p>{`Done a course on MERN (Mongo,Express,React,Node) stack `}</p>
          </li>
          <li className="timeline_item">
            <h4>Canara Engineering College</h4>
            <span>2012-2016</span>
            <p>B.E. in Computer Science.</p>
          </li>
          <li className="timeline_item">
            <h4>St. Aloysius College</h4>
            <span>2010-2012</span>
            <p>Secondary Education - PCMB</p>
          </li>
        </ol>
      </main>
      <style global jsx>{`
        .timeline_item:not(:last-child) {
          margin-bottom: 20px;
        }
        .timeline_item:not(:last-child)::before {
          content: "";
          position: absolute;
          top: -25px;
          left: -38px;
          width: 2px;
          height: calc(100% + 50px);

          background: #383838;
        }
        .timeline_item::after {
          content: "";
          position: absolute;
          top: 12px;
          left: -40px;
          height: 6px;
          width: 6px;
          background: linear-gradient(
            to right,
            hsl(45, 100%, 72%),
            hsl(35, 100%, 68%)
          );
          border-radius: 50%;
          box-shadow: 0 0 0 4px #383838;
        }
        .timeline_item {
          position: relative;
        }
      `}</style>
      <style jsx>{`
        h4 {
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        p {
          margin-top: 0.5rem;
          font-weight: 300;
          font-size: 14px;
        }
        li span {
          color: #ffdb70;
          font-weight: 200;
        }
        ul > li {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default Education;
