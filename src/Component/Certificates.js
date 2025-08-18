import React from "react";
import "./Certificates.css";

export default function Certificates() {
  const certificates = [
    { title: "Microsoft Azure AZ-900" },
    { title: "Microsoft Azure DP-900" },
    { title: "GCP Digital Cloud Leader" },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <span className="certificate-icon">🎓</span>
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
