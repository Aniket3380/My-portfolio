import React from "react";
import "./Home.css";
import profile from "../images/profile.jpeg";
import resume from "../resume/resume.pdf"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={profile} alt="Profile" className="home-img" />
        <h1 className="home-title">Hi, I'm Aniket Dhanawade</h1>
        <p className="home-subtitle">
          Frontend Developer | MERN Stack Developer | FullStack Developer
        </p>
        <Link
          to={resume}
          className="home-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Link>

        {/* Expertise Section */}
        <div className="expertise-section">
          <h2 className="expertise-title">My Expertise</h2>
          <ul className="expertise-list">
            <li>Building responsive, user-friendly interfaces using <b>React.js</b>, <b>HTML5</b>, <b>CSS3</b>, and <b>JavaScript</b>.</li>
            <li>Creating and managing RESTful APIs with <b>Node.js</b> and <b>Express.js</b>.</li>
            <li>Designing and optimizing <b>MongoDB</b> schemas for products, users, and orders.</li>
            <li>Integrating frontend and backend systems for seamless data flow.</li>
            <li>Testing APIs using <b>Postman</b> and ensuring system stability.</li>
            <li>Collaborating with clients to validate features during UAT sessions.</li>
            <li>Managing deployments across dev, pre-prod, and production environments.</li>
            <li>Resolving 30+ frontend & backend issues to improve application performance.</li>
            <li>Using <b>Git</b> and <b>GitHub</b> for version control and collaborative development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
