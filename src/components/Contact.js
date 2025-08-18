import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <p className="experience-header">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <motion.div
        className="contact-info-upper-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Email */}
        <motion.div
          className="contact-info-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:jairam1312kr@gmail.com">jairam1312kr@gmail.com</a>
          </p>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          className="contact-info-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/jayaraman1312/">LinkedIn</a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;