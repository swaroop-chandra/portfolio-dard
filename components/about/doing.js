import React from "react";
import CardHome from "../common/cardHome";

function Doing() {
  return (
    <div>
      <main>
        <div className="flex flex-wrap justify-between p-5">
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
