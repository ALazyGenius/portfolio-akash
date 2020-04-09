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
  render() {
    return (
      <section className="col-lg-2 col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-image-container">
          <img className="sidebar-pic" src={ProfilePic} alt="" />
        </div>
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <span className="nav-item-icon">{aboutIcon}</span>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                <span className="nav-item-icon">{expIcon}</span>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/education">
                <span className="nav-item-icon">{eduIcon}</span>
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <span className="nav-item-icon">{skillIcon}</span>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#interests">
                <span className="nav-item-icon">{interestIcon}</span>
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#awards">
                <span className="nav-item-icon">{awardIcon}</span>
                Awards
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default SideBar;
