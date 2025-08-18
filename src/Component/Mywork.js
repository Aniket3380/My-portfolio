import React from "react";
import "./Mywork.css"
import { Link } from "react-router-dom";

export default function MyWork() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Built with MERN stack, features product listings, cart, and checkout.",
      link: "https://github.com/Aniket3380/E-commerse-Dashborad.git"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio made with React.js and CSS animations.",
      link: "#"
    },
    {
      title: "Todo App",
      description: "Simple CRUD todo app using React and LocalStorage.",
      link: "https://github.com/Aniket3380/todo-app.git"
    }
  ];

  return (
    <section id="work" className="work">
      <h2 className="work-title">My Work</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={project.link} className="work-btn" target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
