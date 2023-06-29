import React from "react";
import { TfiUser } from "react-icons/tfi";

const Experience = () => {
  return (
    <div className="my-24">
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 m-1">
            <TfiUser />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Experience</h1>
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
      <style jsx>{`
        ol > li > h4 {
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

export default Experience;
