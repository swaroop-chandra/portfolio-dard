import React from "react";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";

const Resume = () => {
  return (
    <div className="overflow-y-scroll">
      <main>
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <style jsx>{``}</style>
    </div>
  );
};

export default Resume;
