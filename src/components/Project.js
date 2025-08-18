import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
  {
    title: "Analysis And Detection Of Phishing Website Based On URL ML",
    img: "/assets/Threat Detection.webp",
    github: "https://github.com/Jayaraman-tech/phishing-detection",
    demo: "https://jayaraman-tech.github.io/phishing-detection",
  },
  {
    title: "Tourism E-commerce Hub: Responsive Web Page meow meow",
    img: "https://www.imf.org/-/media/Images/IMF/News/news-article-images/2020/CF-570x312-Tourism-Preto-perola-Getty-Images-iStock-1011241694.ashx",
    github: "https://github.com/Jayaraman-tech",
    demo: "https://your-tourism-demo-link.com",
  },
  {
    title: "Comprehensive College Management and Database System",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQGXoLA2ZXer3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692968204043?e=2147483647&v=beta&t=Igkahlt73NQB_bKAp2qvwTl1F1OnwaDDz3vcUzooNSQ",
    github: "https://github.com/Jayaraman-tech",
    demo: "https://your-college-demo-link.com",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <p className="experience-header">Browse My Recent</p>
      <h1 className="title">Projects</h1>

      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="details-container color-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 3 }}
            >
              <div className="article-container">
                <div className="project-img-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
              </div>
              <h2 className="experience-sub-title project-title">
                {project.title}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        whileHover={{ y: 5 }}
        transition={{ yoyo: Infinity, duration: 0.5 }}
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Project;