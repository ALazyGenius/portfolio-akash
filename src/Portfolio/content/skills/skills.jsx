import React, { Component } from "react";
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

const checkIcon = <FontAwesomeIcon icon={faCheck} />;

class Skills extends Component {
  state = {};
  render() {
    return (
      <section className="col-lg-12 col-md-12 d-none d-md-block skills-container">
        <div class="row skills-subcontainer">
          <h2 class="mb-5">Skills</h2>
          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <img className="icon" src={IconHtml5} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconCSS3} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconJS} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconAngular} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconReact} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconNode} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconSass} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconLess} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconTypescript} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconGulp} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconGrunt} alt="" />
            </li>
            <li class="list-inline-item">
              <img className="icon" src={IconNPM} alt="" />
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <li class="fa-ul mb-0">
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
          </li>
        </div>
      </section>
    );
  }
}

export default Skills;
