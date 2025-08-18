import React from "react";
import "./Myskill.css"

export default function Myskill() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Redux", "Bootstrap"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      category: "Database",
      skills: ["MongoDB"],
    },
    {
      category: "Tools & Testing",
      skills: ["Postman", "Git", "GitHub"],
    },
    {
      category: "API",
      skills: ["REST API Development & Integration"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((section, index) => (
          <div key={index} className="skills-card">
            <h3>{section.category}</h3>
            <ul>
              {section.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
