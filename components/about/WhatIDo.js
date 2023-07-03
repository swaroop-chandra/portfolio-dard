import React from "react";
import CardHome from "../common/cardHome";
import { GiPalette } from "react-icons/gi";
import {
  VscDatabase,
  VscFileCode,
  VscPieChart,
  VscPreview,
} from "react-icons/vsc";

function Doing() {
  const objectData = [
    {
      image: <VscPieChart className="w-10 h-10 text-amber-400" />,
      title: "Web Architecture",
      message:
        "Understand the requirement for the betterment of the development.",
    },
    {
      image: <VscPreview className="w-10 h-10 text-amber-400" />,
      title: "Front End Development",
      message: "High-quality development of sites at the professional level.",
    },
    {
      image: <VscFileCode className="w-10 h-10 text-amber-400" />,
      title: "Back End Design",
      message: "Professional development of applications and optimized code.",
    },
    {
      image: <GiPalette className="w-10 h-10 text-amber-400" />,
      title: "Artist",
      message: "Passion and my hobby to be more creative and learning new art.",
    },
  ];
  return (
    <div>
      <main>
        <div className="flex lg:flex-row lg:flex-wrap flex-col justify-between p-5">
          <CardHome
            image={objectData[0].image}
            title={objectData[0].title}
            message={objectData[0].message}
          />
          <CardHome
            image={objectData[1].image}
            title={objectData[1].title}
            message={objectData[1].message}
          />
          <CardHome
            image={objectData[2].image}
            title={objectData[2].title}
            message={objectData[2].message}
          />
          <CardHome
            image={objectData[3].image}
            title={objectData[3].title}
            message={objectData[3].message}
          />
        </div>
      </main>
      <style jsx>{``}</style>
    </div>
  );
}

export default Doing;
