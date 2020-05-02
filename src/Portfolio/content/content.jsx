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
  let debounceTimer;

  const onPageScroll = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(onScrollEnd, 500);
  };

  const onScrollEnd = () => {
    const elementArr = document.querySelectorAll(".section-blocks");
    elementArr.forEach((el) => {
      const bounding = el.getBoundingClientRect();
      if (
        bounding.top < 150 && bounding.bottom > 150
      ) {
        props.styleSidebarOnManualScroll(el.getAttribute("id"));
      }
    });
  };

  const scrollIntoView = (id) => {
    const sectionToScroll = document.getElementById(id);
    sectionToScroll.scrollIntoView({
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", onPageScroll);

  useEffect(() => {
    if (section) {
      scrollIntoView(section);
    }
  }, [section]);

  return (
    <div className="dashboard-container container-fluid">
      <div className="section-blocks" id="about-me">
        <AboutMe></AboutMe>
        <hr />
      </div>
      <div className="section-blocks" id="experience">
        <Experience></Experience>
        <hr />
      </div>
      <div className="section-blocks" id="education">
        <Education></Education>
        <hr />
      </div>
      <div className="section-blocks" id="skills">
        <Skills></Skills>
        <hr />
      </div>
      <div className="section-blocks" id="interests">
        <Interests></Interests>
        <hr />
      </div>
      <div className="section-blocks" id="awards">
        <Awards></Awards>
        <hr />
      </div>
    </div>
  );
};

export default Content;
