import React, { useState } from "../../../node_modules/react";
import AboutMe from "./about-me/about-me";
import Experience from "./experience/experience";
import Education from "./education/education";
import Skills from "./skills/skills";
import Interests from "./interests/interests";
import Awards from "./awards/awards";
import "./content.css";

function Content() {
  return (
    <div className="dashboard-container container-fluid">
      <AboutMe></AboutMe>
      <hr />
      <Experience id="experience"></Experience>
      <hr />
      <Education></Education>
      <hr />
      <Skills></Skills>
      <hr />
      <Interests></Interests>
      <hr />
      <Awards></Awards>
      <hr />
    </div>
  );
}

export default Content;
