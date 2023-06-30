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
        "The most modern and high-quality design made at a professional level.",
    },
    {
      image: <VscPreview className="w-10 h-10 text-amber-400" />,
      title: "Front End Development",
      message:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      image: <VscFileCode className="w-10 h-10 text-amber-400" />,
      title: "Back End Design",
      message:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      image: <GiPalette className="w-10 h-10 text-amber-400" />,
      title: "Artist",
      message:
        "The most modern and high-quality design made at a professional level.",
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
