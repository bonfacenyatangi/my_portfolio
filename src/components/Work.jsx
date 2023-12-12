import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023, September - Present ",
    title: "Software Developer Intern",
    duration: "3 months",
    details: "Working on open source projects",
  },
  {
    year: "2022, January - Decemeber ",
    title: "ICT Support Intern",
    duration: "1 year",
    details: "Offering essential ICT Services for the Authority",
  },
  {
    year: "2021, July - Decemeber ",
    title: "Cybercafé Attendant",
    duration: "6 months",
    details: "Cybercafé Services at Bjeva Cybercafé Solutions",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
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
