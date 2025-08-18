import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Profile.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const typedElement = useRef(null);
  
  useEffect(() => {
  AOS.init({ duration: 1200, once: true });
}, [])
  

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Developer", "UI/UX Enthusiast", "Python Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="profile">
  {/* Profile Picture */}
  <div className="section__pic-container" data-aos="fade-right">
    <img src="/assets/Profile Picture.jpeg" alt="Jayaraman profile" />
  </div>

  {/* Text Section */}
  <div className="section__text" data-aos="fade-left">
    <p className="section__text__p1">Hello, I'm</p>
    <h1 className="title">Jayaraman</h1>
    <p className="section__text__p2">
      <span ref={typedElement}></span>
    </p>

    {/* Buttons */}
    <div className="btn-container" data-aos="fade-up">
      <button
        className="btn btn-color-2"
        onClick={() => window.open("/assets/Jayaraman_resume.pdf")}
      >
        Download CV
      </button>
      <button
        className="btn btn-color-1"
        onClick={() => (window.location.href = "#contact")}
      >
        Contact Info
      </button>
    </div>

    {/* Socials */}
    <div id="socials-container" data-aos="zoom-in">
      <img
        src="/assets/linkedin.png"
        alt="LinkedIn profile"
        className="icon"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/jayaraman1312/")
        }
      />
      <img
        src="/assets/github.png"
        alt="Github profile"
        className="icon"
        onClick={() =>
          (window.location.href = "https://github.com/Jayaraman-tech")
        }
      />
    </div>
  </div>
</section>
  );
};

export default Profile;