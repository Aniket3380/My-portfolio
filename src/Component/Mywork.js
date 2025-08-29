import React from "react";
import "./Mywork.css"
import { Link } from "react-router-dom";

export default function MyWork() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Built with MERN stack, features product listings, cart, and checkout.",
      link: "https://github.com/Aniket3380/E-commerse-Dashborad.git",
      liveLink: "https://e-commerse-dashborad.vercel.app/signup",
    },

    {
    title: "Weather Dashboard",
    description: "Weather app using React and OpenWeather API to get real-time weather data.",
    link: "https://github.com/Aniket3380/Weather-Dashboard.git",
    liveLink: "https://weather-dashboard-virid-six.vercel.app/"
  },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio made with React.js and CSS animations.",
      link: "https://github.com/Aniket3380/My-portfolio",
      liveLink: "https://my-portfolio-seven-sandy-11.vercel.app/",
    },
    {
      title: "Todo App",
      description: "Simple CRUD todo app using React and LocalStorage.",
      link:"https://github.com/Aniket3380/My-todo-app.git",
      liveLink: "https://my-todo-app-mu-self.vercel.app/"
    },
     
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
            <Link to={project.liveLink} className="work-btn live-link" target="_blank" rel="noopener noreferrer">
              View Live Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
