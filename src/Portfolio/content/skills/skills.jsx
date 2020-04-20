import React, { useState } from "react";
import "./skills.css";

import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome";
import { faCheck } from "../../../../node_modules/@fortawesome/free-solid-svg-icons";
import IconHtml5 from "../../../../node_modules/react-devicon/html5/original/Html5Original.svg";
import IconCSS3 from "../../../../node_modules/react-devicon/css3/original/Css3Original.svg";
import IconJS from "../../../../node_modules/react-devicon/javascript/original/JavascriptOriginal.svg";
import IconAngular from "../../../../node_modules/react-devicon/angularjs/original/AngularjsOriginal.svg";
import IconReact from "../../../../node_modules/react-devicon/react/original/ReactOriginal.svg";
import IconNode from "../../../../node_modules/react-devicon/nodejs/original/NodejsOriginal.svg";
import IconSass from "../../../../node_modules/react-devicon/sass/original/SassOriginal.svg";
import IconLess from "../../../../node_modules/react-devicon/less/plain-wordmark/LessPlainWordmark.svg";
import IconTypescript from "../../../../node_modules/react-devicon/typescript/original/TypescriptOriginal.svg";
import IconGulp from "../../../../node_modules/react-devicon/gulp/plain/GulpPlain.svg";
import IconGrunt from "../../../../node_modules/react-devicon/grunt/original/GruntOriginal.svg";
import IconNPM from "../../../../node_modules/react-devicon/npm/original-wordmark/NpmOriginalWordmark.svg";
import IconJasmine from "../../../../node_modules/react-devicon/jasmine/plain/JasminePlain.svg";
import IconDSA from "../../../Images/data-structure.jpg";

const checkIcon = <FontAwesomeIcon icon={faCheck} />;

function Skills() {
  return (
    <section className="col-lg-12 col-md-12 d-none d-md-block skills-container">
      <div className="row skills-subcontainer">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons margin-btm">
          <li className="list-inline-item">
            <img className="icon" src={IconHtml5} alt="HTML5" title="HTML5" />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconCSS3} alt="CSS3" title="CSS3" />
          </li>
          <li className="list-inline-item">
            <img
              className="icon"
              src={IconJS}
              alt="Javascript"
              title="Javascript"
            />
          </li>
          <li className="list-inline-item">
            <img
              className="icon"
              src={IconAngular}
              alt="Angular"
              title="Angular"
            />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconReact} alt="React" title="React" />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconNode} alt="NodeJS" title="NodeJS" />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconSass} alt="SASS" title="SASS" />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconLess} alt="LESS" title="LESS" />
          </li>
          <li className="list-inline-item">
            <img
              className="icon"
              src={IconTypescript}
              alt="Typescript"
              title="Typescript"
            />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconGulp} alt="Gulp" title="Gulp" />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconGrunt} alt="Grunt" title="Grunt" />
          </li>
          <li className="list-inline-item">
            <img
              className="icon"
              src={IconNPM}
              alt="Node Package Manager"
              title="Node Package Manager"
            />
          </li>
          <li className="list-inline-item">
            <img
              className="icon"
              src={IconJasmine}
              alt="Jasmine"
              title="Jasmine"
            />
          </li>
          <li className="list-inline-item">
            <img className="icon" src={IconDSA} alt="DSA" title="DSA" />
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <div className="fa-ul margin-btm">
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Cross Functional Teams
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Agile Development &amp; Scrum
          </li>
        </div>

        <div className="subheading mb-3">Responsibilities</div>
        <div className="fa-ul margin-btm">
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            To provide all the deliverables in time without delays
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            To do a full-fledged integration and testing with multiple screen
            sizes
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            To effectively follow software development methodologies like Agile
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            To write bug free code to reduce time and efforts utilized while
            testing and debugging
          </li>
        </div>

        <div className="subheading mb-3">Abilities</div>
        <div className="fa-ul margin-btm">
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Analytical problem solving with code
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Technical and non-technical communication
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Engineering best practices and approach (Debugging, code structure,
            patience and reference to documentation)
          </li>
          <li>
            <span className="nav-item-icon">{checkIcon}</span>
            Language and computer science experience
          </li>
        </div>
      </div>
    </section>
  );
}

export default Skills;
