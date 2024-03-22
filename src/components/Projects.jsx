import React from "react";
import ProjectItem from "./ProjectItem";
import projectImg1 from "../assets/images/project1.jpg";
import projectImg2 from "../assets/images/project2.jpg";
import projectImg3 from "../assets/images/project3.jpg";
import projectImg4 from "../assets/images/project4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#01890f]">
        Projects
      </h1>
      <p className="text-center py-8">
        Dive into my collection of projects, where innovation meets code.
        Discover a range of creations, some ready to explore on Git, while
        others await their moment to shine after deployment.{" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://github.com/bonfacenyatangi/farmerstea">
          <ProjectItem img={projectImg1} title="Tea Farmers App" />
        </a>
        <a href="https://bonfacenyatangi.github.io/Tusome/">
          <ProjectItem img={projectImg2} title="Tusome App" />
        </a>
        <a href="link-to-project3">
          <ProjectItem img={projectImg3} title="Moringa Overflow App" />
        </a>
        <a href="link-to-project4">
          <ProjectItem img={projectImg4} title="Elewa App" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
