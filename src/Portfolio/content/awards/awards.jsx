import React, {  } from "react";
import "./awards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
const trophyIcon = <FontAwesomeIcon icon={faTrophy} />;

function Awards() {
  return (
    <section className="col-lg-12 col-md-12 d-md-block awards-container">
      <div className="row awards-subcontainer">
        <h2 className="mb-5">Awards</h2>
        <div className="fa-ul margin-btm">
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            Certified Front-End Developer - Udacity
          </li>
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            Certified Angular Developer - Udemy
          </li>
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            Certified Data Structures and Alogithms Developer - Udemy
          </li>
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            Certified JS Developer - Udemy
          </li>
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            Unstoppable Award - Mindtree Ltd.
          </li>
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            A+ Team Award - Mindtree Ltd.
          </li>
          <li>
            <span className="nav-item-icon">{trophyIcon}</span>
            Outstanding Award - Infosys Ltd.
          </li>
        </div>
      </div>
    </section>
  );
}

export default Awards;
