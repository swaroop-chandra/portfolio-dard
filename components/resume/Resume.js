import React from "react";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

const Resume = () => {
  return (
    <div className="overflow-y-scroll">
      <main>
        <Education />
        <Experience />
        <Skills />
      </main>
      <style jsx>{``}</style>
    </div>
  );
};

export default Resume;
