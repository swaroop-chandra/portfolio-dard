import React from "react";
import { TfiUser } from "react-icons/tfi";

const Experience = () => {
  return (
    <div className="my-24">
      <main>
        <div className="flex gap-4 mb-5">
          <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 w-10 h-10 m-1">
            <TfiUser />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-semibold">Experience</h1>
          </div>
        </div>
        <ol className="lg:ms-16 ms-12">
          <li className="timeline_item">
            <h4>Taskmo</h4>
            <span>Apr 2021 - Present</span>
            <p>
              Played a crucial role as the core member of the technical team.
              Responsible for developing flagship products for Taskmo with
              proven expertise in project management, coordination, and
              problem-solving.
              <ul className="list-disc ms-5">
                <li>
                  Led the creation of Fieldon by Taskmo, a foundational project
                  that continues to streamline operations for the organisation.
                </li>
                <li>
                  Ideated and developed an intuitive customer relationship
                  management portal for clients to have a smart overview of the
                  project in real-time.
                </li>
                <li>
                  Successfully developed 50+ full-use portals for various
                  external stakeholders and in-house teams working on client
                  operations and reduced work redundancy by upto 80%.
                </li>
                <li>
                  Ensured effective data management across in-house teams by
                  creating exclusive dashboards and streamlined workflows.
                </li>
                <li>
                  Mentored and lead a team equipping them to work on core
                  functionalities of the organisation.
                </li>
                <li>
                  Demonstrated strong project management skills, overseeing
                  tasks and ensuring timely completion.
                </li>
              </ul>
            </p>
          </li>
          <li className="timeline_item">
            <h4>Cognitive Clouds</h4>
            <span>Dec 2019 - Jan 2021</span>
            <p>
              Holding a strong track record of working on multiple projects,
              including SYSTYM, Traksafety, and CHG. <br />
              <ul className="list-disc ms-5">
                <li>
                  Developed backend functionalities for projects such as SYSTYM,
                  Traksafety, and CHG.
                </li>
                <li>
                  Utilized PostgreSQL, Node.js, Express.js, Ruby on Rails (ROR),
                  and email templates.
                </li>
                <li>
                  Ensured efficient database management and optimized backend
                  performance.
                </li>
                <li>
                  Collaborated with cross-functional teams to gather
                  requirements and translate them into technical
                  implementations.
                </li>
                <li>
                  Conducted thorough testing and debugging to ensure the
                  stability and reliability of backend systems.
                </li>
                <li>
                  Actively stayed updated with industry trends and best
                  practices to enhance backend development skills.
                </li>
              </ul>
            </p>
          </li>
          <li className="timeline_item">
            <h4>DAZN</h4>
            <span>Feb 2017 — Jun 2019</span>
            <p>
              Responsible for management content editing and placement and
              ensure that content adhered to the given guidelines and
              maintaining coordination across cross functional teams.
              <ul className="list-disc ms-5">
                <li>
                  Managed content placement on the company's website using the
                  in-house CMS tool.
                </li>
                <li>
                  Ensured accurate and precise content positioning based on
                  given specifics.
                </li>
                <li>
                  Maintained consistency, quality, and adherence to content
                  guidelines.
                </li>
                <li>
                  Collaborated with cross-functional teams to meet content
                  objectives.
                </li>
                <li>
                  Conducted thorough quality checks to ensure error- free
                  content placement.
                </li>
                <li>
                  Actively stayed updated with industry trends and best
                  practices in content management
                </li>
              </ul>
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

export default Experience;
