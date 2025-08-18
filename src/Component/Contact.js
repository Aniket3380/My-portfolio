import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-card">
          <FaPhoneAlt size={24} />
          <p>+91 9158411014</p>
        </div>
        <div className="contact-card">
          <FaEnvelope size={24} />
          <p>aniketdhanawade1011@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaLinkedin size={24} />
          <Link
            to="https://www.linkedin.com/in/aniket-dhanawade-b81895214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
        <div className="contact-card">
          <FaGithub size={24} />
          <Link
            to="https://github.com/Aniket3380"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
