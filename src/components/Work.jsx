import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023",
    title: "Software Developer Intern",
    duration: "iTalanta - 3 months",
    details: "Working on open source projects",
  },
  {
    year: "2022",
    title: "ICT Support Intern",
    duration: "KRA - 1 year",
    details:
      "Resolved 200+ user incidents and met 95% of SLAs annually. Deployed IT equipment for 30+ staff, improving productivity. Installed/updated 50+ software applications for organization-wide efficiency. Managed an inventory of 1500+ IT assets and tracked changes. Provided timely hardware/software maintenance to minimize downtime. Supported virtual meeting solutions for 500+ employees. Completed additional tasks assigned by supervisors to support the team and organization.",
  },
  {
    year: "2021",
    title: "Cybercafé Attendant",
    duration: "Bjeva Cybercafé Solutions - 6 months",
    details: "Cybercafé Services at Bjeva Cybercafé Solutions",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#01890f]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
