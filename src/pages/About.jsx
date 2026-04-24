import React from "react";
import "../assets/styles.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-left-title">About Me</h1>
        </div>

        <div className="about-right-content">
          <section className="about-short-bio">
            Hello! My name is Shaira Jean Cayubit and I'm currently a <span className="bold">Digital Media student</span>, I am seeking opportunities 
            to apply my skills in interactive media, spatial design, and mobile development. <br /><br />
            I focus on the intersection of design and emerging tech trends. Whether I’m collaborating 
            on a team for <span className="italic">Lumia (my current AR project)</span> or creating social media content, I am committed 
            to building consistent, user-centered digital experiences. <br /><br />
            I utilize <span className="bold">Figma, Canva, and React Native</span> to bridge the gap between static design 
            and interactive reality, using GitHub to manage a seamless development workflow.
          </section>
        </div>
      </div>

      <div className="full-screen-center-section">
        <div className="about-grid-layout">
          <section>
            <h2 className="about-section-header">Education</h2>
            <div className="about-text-block">
              <h3>Associates of Arts</h3>
              <p>Broward College</p>
              <p className="italic">2022 - 2024</p>
            </div>
            <br />
            <div className="about-text-block">
              <h3>BA Digital Media, Web & Interactive Media</h3>
              <p>University of Central Florida</p>
              <p className="italic">2024 - Present</p>
            </div>
          </section>

          <section>
            <h2 className="about-section-header">Experience</h2>
            <div className="about-text-block">
              <h3>Bridge to Life</h3>
              <p>Remote</p>
              <p>Digital Content Creator</p>
              <p className="italic">May 2023 - Mar 2026</p>
            </div>
            <br />
            <div className="about-text-block">
              <h3>Appily</h3>
              <p>Remote</p>
              <p>Digital Content Creator</p>
              <p className="italic"> Sept 2024 - Mar 2026</p>
            </div>
            <br />
            <div className="about-text-block">
              <h3>Help Us Grow</h3>
              <p>Remote</p>
              <p>Social Media Intern</p>
              <p className="italic">Dec 2024 - April 2026</p>
            </div>
            <br />
            <div className="about-text-block">
              <h3>Philippine Health Initiative</h3>
              <p>Remote</p>
              <p>Graphic/Design Chair</p>
              <p className="italic">Sept 2025 - Present</p>
            </div>
          </section>

          <section>
            <h2 className="about-section-header">Language</h2>
            <div className="about-text-block">
              <h3>English</h3>
              <p>Advanced</p>
            </div>
            <br />
            <div className="about-text-block">
              <h3>Filipino</h3>
              <p>Native Speaker</p>
            </div>
          </section>

          <section>
            <h2 className="about-section-header">Skills</h2>
            <div className="about-text-block">
              <h3>Canva</h3>
            </div>
            <br />
            <div className="about-text-block">
              <h3>Procreate</h3>
            </div>
            <br />
            <div className="about-text-block">
              <h3>Visual Studio Code</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;