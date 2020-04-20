import React, { Component } from "../../../node_modules/react";

import "./side-bar.css";
import ProfilePic from "../../Images/icon-programmer-14.jpg";

import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHourglassHalf,
  faBookOpen,
  faAward,
  faGamepad,
  faCode,
} from "../../../node_modules/@fortawesome/free-solid-svg-icons";
const aboutIcon = <FontAwesomeIcon icon={faAddressCard} />;
const expIcon = <FontAwesomeIcon icon={faHourglassHalf} />;
const eduIcon = <FontAwesomeIcon icon={faBookOpen} />;
const awardIcon = <FontAwesomeIcon icon={faAward} />;
const interestIcon = <FontAwesomeIcon icon={faGamepad} />;
const skillIcon = <FontAwesomeIcon icon={faCode} />;

class SideBar extends Component {
  state = {};

  // Delegated click handler
  registerRoute = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <section className="col-lg-2 col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-image-container">
          <img className="sidebar-pic" src={ProfilePic} alt="" />
        </div>
        <div className="sidebar-sticky">
          <div className="sub-section-container">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="nav-link nav-item-icon">{aboutIcon}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-item-icon">{expIcon}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-item-icon">{eduIcon}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-item-icon">{skillIcon}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-item-icon">{interestIcon}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link nav-item-icon">{awardIcon}</span>
              </li>
            </ul>
            <ul className="nav flex-column" onClick={this.registerRoute}>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/interests">
                  Interests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/awards">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default SideBar;
