import React from "react";
import { SlRocket, SlLink } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <div className="my-24">
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 m-1">
            <SlRocket />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Projects</h1>
          </div>
        </div>
        <ol className="ms-16">
          <li className="timeline_item">
            <h4>Client Resource Portal</h4>
            <p>
              I developed 40+ exclusive client portals that streamline project
              operations.
              <ul className="list-disc ms-5">
                <li>
                  The portal allowed clients to easily manage, track, and access
                  the project standing in real-time.
                </li>
                <li>
                  The portal was designed to enhance efficiency of the project
                  and offers smart overview on the project in real-time.
                </li>
                <li>
                  It allows clients and partners to view follow-up on leads,
                  ensuring effective communication and issue resolution.
                  enhancing efficiency while on the ground.
                </li>
                <li>
                  Additionally, the application provided graphical
                  representations of individual field partner productivity and
                  incorporated features such as click-to-call functionality and
                  the ability to export reports in Excel and PDF formats.
                </li>
                <li>
                  This comprehensive solution maximized productivity upto 10x
                  times and improved collaboration within the team.
                </li>
              </ul>
            </p>
          </li>
          <li className="timeline_item">
            <h4>Internal Resource Dashboard</h4>
            <p>
              I developed 10+ robust platform that effectively represented leads
              for individual projects in a dynamic manner.
              <br />
              <ul className="list-disc ms-5">
                <li>
                  The platform included advanced features to track the number of
                  leads generated, the successful completion of quality checks,
                  and the check-in status of field partners in various states.
                </li>
                <li>
                  Additionally, I implemented strict access control measures to
                  ensure secure access for both clients and the internal team.
                  By leveraging this platform, project teams were able to
                  efficiently monitor lead performance, maintain data integrity,
                  and facilitate seamless collaboration.
                </li>
                <li>
                  As a result, the platform significantly enhanced project
                  management and overall productivity of internal teams up to 8x
                  times.
                </li>
              </ul>
            </p>
          </li>
          <li className="timeline_item">
            <h4>
              Thishi Events{" "}
              <a
                href="https://github.com/swaroop-chandra/thrishi_web"
                target="_blank"
                rel="noopener noreferrer"
                className="m-1 ms-4"
              >
                <SiGithub className="w-5 h-5 text-stone-500 hover:text-stone-950 hover:bg-gray-300 rounded-md cursor-pointer" />
              </a>
              <a
                href="https://thrishi-web-1ooj.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="m-1 "
              >
                <SlLink className="w-5 h-5 text-stone-500 hover:text-blue-600 hover:bg-gray-300 rounded-md cursor-pointer p-1" />
              </a>
            </h4>
            <p>
              A project made for practice to show my abilities into building a
              fully dynamic yet interactive website. Next.js and other API's
              were used in this project.
            </p>
          </li>
          <li className="timeline_item">
            <h4>
              Khoka{" "}
              <a
                href="https://github.com/swaroop-chandra/khoka"
                target="_blank"
                rel="noopener noreferrer"
                className="m-1 ms-4"
              >
                <SiGithub className="w-5 h-5 text-stone-500 hover:text-stone-950 hover:bg-gray-300 rounded-md cursor-pointer" />
              </a>
              <a
                href="https://khokaa-9963c.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-1"
              >
                <SlLink className="w-5 h-5 text-stone-500 hover:text-blue-600 hover:bg-gray-300 rounded-md cursor-pointer p-1" />
              </a>
            </h4>

            <p>
              Khoka is an online rental bike booking platform, that is solely
              designed for students to use rental bikes for their commute at
              affordable rates.
            </p>
          </li>
        </ol>
      </main>
      <style jsx>{`
        ol > li > h4 {
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: flex;
        }

        p {
          margin-top: 0.5rem;
          font-weight: 200;
        }
        li span {
          color: #ffdb70;
          font-weight: 200;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Projects;
