import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    links: false,
    contact: false,
    social: false
  });

  const sectionRefs = {
    about: useRef(null),
    links: useRef(null),
    contact: useRef(null),
    social: useRef(null)
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = entry.target.getAttribute('data-section');
            setVisibleSections((prev) => ({ ...prev, [name]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Assign staggered delay based on order
  const sectionOrder = ['about', 'links', 'contact', 'social'];

  return (
    <footer className="footer">
      <div className="footer-container">

        {sectionOrder.map((sectionName, index) => {
          const sectionRef = sectionRefs[sectionName];
          const delay = index * 0.3; // 0.3s stagger
          return (
            <div
              key={sectionName}
              ref={sectionRef}
              data-section={sectionName}
              className={`footer-section ${visibleSections[sectionName] ? 'animate' : ''}`}
              style={{ transitionDelay: `${delay}s` }}
            >
              {sectionName === 'about' && (
                <>
                  <h2>About Me</h2>
                  <p>I'm Jayaraman, a passionate web developer building modern and responsive web apps.</p>
                </>
              )}
              {sectionName === 'links' && (
                <>
                  <h2>Quick Links</h2>
                  <ul>
                    <li><a href="#profile">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </>
              )}
              {sectionName === 'contact' && (
                <>
                  <h2>Contact</h2>
                  <p>Email: jairam1312kr@gmail.com</p>
                  <p>Phone: +91 6383433359</p>
                  <div className="newsletter">
                    <h3>Subscribe to Newsletter</h3>
                    <form onSubmit={handleSubscribe}>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit">Subscribe</button>
                    </form>
                    {submitted && <p className="success-msg">Subscribed successfully!</p>}
                  </div>
                </>
              )}
              {sectionName === 'social' && (
                <>
                  <h2>Follow Me</h2>
                  <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                  </div>
                </>
              )}
            </div>
          );
        })}

      </div>

      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footer-bottom">
        <p>© {currentYear} Jayaraman. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;