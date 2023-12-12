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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        laboriosam harum culpa. Nostrum labore eum velit id exercitationem
        officiis inventore!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={projectImg1} title="Tea Farmers App" />
        <ProjectItem img={projectImg2} title="Tusome App" />
        <ProjectItem img={projectImg3} title="Moringa Overflow App" />
        <ProjectItem img={projectImg4} title="Elewa App" />
      </div>
    </div>
  );
};

export default Projects;
