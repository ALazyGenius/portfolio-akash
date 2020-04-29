import React, { useEffect } from "../../../node_modules/react";

import AboutMe from "./about-me/about-me";
import Experience from "./experience/experience";
import Education from "./education/education";
import Skills from "./skills/skills";
import Interests from "./interests/interests";
import Awards from "./awards/awards";
import "./content.css";

const Content = (props) => {

  const { section } = props;

  const scrollIntoView = (id) => {
    const sectionToScroll = document.getElementById(id);
    sectionToScroll.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (props.section) {
      scrollIntoView(section);
    }
  }, [props, section]);

  return (
    <div className="dashboard-container container-fluid">
      <div id="about-me">
        <AboutMe></AboutMe>
        <hr />
      </div>
      <div id="experience">
        <Experience></Experience>
        <hr />
      </div>
      <div id="education">
        <Education></Education>
        <hr />
      </div>
      <div id="skills">
        <Skills></Skills>
        <hr />
      </div>
      <div id="interests">
        <Interests></Interests>
        <hr />
      </div>
      <div id="awards">
        <Awards></Awards>
        <hr />
      </div>
    </div>
  );
};

export default Content;
