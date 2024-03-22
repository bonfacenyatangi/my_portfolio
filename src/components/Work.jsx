import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2024",
    title: "Web Developer",
    duration: "Upwork Freelancing - Present",
    details:
      "Developing responsive websites, ensuring client satisfaction and positive reviews. Implementing custom HTML/CSS/JS solutions, improving performance and UX.  Collaborating with clients, translating needs to technical requirements for successful projects. Utilizing React/Angular for dynamic, interactive web applications. Optimizing websites for SEO, increasing traffic and business visibility. Providing ongoing website support and maintenance, keeping them updated and secure. Actively participating in Upwork community, receiving recognition and contributing positively",
  },
  {
    year: "2023",
    title: "Software Developer Intern",
    duration: "iTalanta - 3 months",
    details:
      "Developed and implemented software solutions, contributing to the company's product offerings. Collaborated with senior developers to design and code new features, enhancing product functionality. Assisted in troubleshooting and debugging software issues, ensuring smooth operation of applications. Participated in team meetings and brainstorming sessions, contributing ideas and insights. Demonstrated a willingness to learn and grow, taking on new challenges and responsibilities. Received positive feedback from supervisors and team members for performance and contribution. Enhanced technical skills and knowledge through hands-on experience and training sessions.",
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
    details:
      "Managed cyber cafe operations, ensuring customer satisfaction. Provided prompt technical support, maintaining high service standards. Implemented security measures for customer data and safe browsing. Increased customer base through effective marketing, improving profitability. Trained new employees, contributing to a skilled and efficient team. Maintained inventory and equipment for customer needs. Built positive customer relationships, resulting in repeat business and referrals ",
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
          details={item.details.split(". ").map((point, index) => (
            <p key={index}>- {point}</p>
          ))}
        />
      ))}
    </div>
  );
};

export default Work;
