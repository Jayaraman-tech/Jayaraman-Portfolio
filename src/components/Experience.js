import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

// Variants for stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // gap between children
      delayChildren: 0.2, // delay before starting stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  const webDevSkills = [
    { skill: "HTML", level: "Experienced" },
    { skill: "CSS", level: "Experienced" },
    { skill: "React", level: "Intermediate" },
    { skill: "JavaScript", level: "Basic" },
    { skill: "TypeScript", level: "Basic" },
    { skill: "Django", level: "Intermediate" },
  ];

  const tools = [
    { skill: "MySQL", level: "Intermediate" },
    { skill: "Linux", level: "Basic" },
    { skill: "Operating System", level: "Intermediate" },
    { skill: "Git", level: "Intermediate" },
  ];

  return (
    <section id="experience">
      {/* Header */}
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="experience-header">Explore My</p>
        <h1 className="title">Experience</h1>
      </motion.div>

      <div className="experience-details-container">
        <div className="about-containers">
          {/* Web Development Section */}
          <motion.div
            className="details-container"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="experience-sub-title">Web Development</h2>

            <motion.div
              className="article-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {webDevSkills.map((item, index) => (
                <motion.article
                  key={index}
                  className="experience-card"
                  variants={itemVariants}
                >
                  <img
                    src="./assets/checkmark.png"
                    alt="checkmark icon"
                    className="icon"
                  />
                  <div>
                    <h3>{item.skill}</h3>
                    <p>{item.level}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            className="details-container"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="experience-sub-title">Tools And Platforms</h2>

            <motion.div
              className="article-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {tools.map((item, index) => (
                <motion.article
                  key={index}
                  className="experience-card"
                  variants={itemVariants}
                >
                  <img
                    src="./assets/checkmark.png"
                    alt="checkmark icon"
                    className="icon"
                  />
                  <div>
                    <h3>{item.skill}</h3>
                    <p>{item.level}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Arrow */}
      <motion.img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        onClick={() => {
          window.location.href = "./#projects";
        }}
      />
    </section>
  );
};

export default Experience;