import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-subtitle" data-aos="fade-up">Get To Know More</h2>
      <h1 className="section-title" data-aos="fade-up">About Me</h1>

      {/* Intro Paragraph */}
      <p className="about-intro" data-aos="fade-up" data-aos-delay="200">
        Hi there! I'm <b>Jayaraman</b>, a final-year <b>B.Tech IT student</b> with a deep passion 
        for <b>Frontend Development</b>, <b>UI/UX Design</b>, and <b>Python programming</b>.  
        Over the past four years, I’ve built cool projects, solved challenging problems, 
        and explored technologies from <b>web apps</b> to <b>cloud computing</b> and <b>AI</b>.
      </p>

      {/* Cards Section */}
      <div className="about-cards">
        <div className="card" data-aos="zoom-in">
          <img src="/assets/experience.png" alt="Experience" className="card-icon" />
          <h3>Experience</h3>
          <p>
            Own Projects <br /> Frontend Development & ML
          </p>
        </div>

        <div className="card" data-aos="zoom-in" data-aos-delay="200">
          <img src="/assets/education.png" alt="Education" className="card-icon" />
          <h3>Education</h3>
          <p>
            B.Tech <br /> Information Technology
          </p>
        </div>
      </div>

      {/* Outro */}
      <p className="about-outro" data-aos="fade-up" data-aos-delay="400">
        As I step into the professional world, I’m eager to <b>apply my knowledge</b>, 
        <b>keep learning</b>, and <b>contribute to impactful projects</b>.  
        Let’s connect — I’d love to share more about my journey and hear about yours too!
      </p>
    </section>
  );
};

export default About;