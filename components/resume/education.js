import React from "react";
import { TfiBook } from "react-icons/tfi";

const Education = () => {
  return (
    <div>
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 m-1">
            <TfiBook />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Education</h1>
          </div>
        </div>
        <ol className="ms-16">
          <li className="timeline_item">
            <h4>University School Of The Arts</h4>
            <span>2007 — 2008</span>
            <p>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline_item">
            <h4>University School Of The Arts</h4>
            <span>2007 — 2008</span>
            <p>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline_item">
            <h4>University School Of The Arts</h4>
            <span>2007 — 2008</span>
            <p>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
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
          font-weight: 200;
        }
        li span {
          color: #ffdb70;
          font-weight: 200;
        }
      `}</style>
    </div>
  );
};

export default Education;
