import React, { useState } from "react";
import "./interests.css";

import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faRoute,
  faMountain,
  faGuitar,
  faGamepad,
  faHamburger,
} from "../../../../node_modules/@fortawesome/free-solid-svg-icons";
const cameraIcon = <FontAwesomeIcon icon={faCameraRetro} />;
const routeIcon = <FontAwesomeIcon icon={faRoute} />;
const mountainIcon = <FontAwesomeIcon icon={faMountain} />;
const guitarIcon = <FontAwesomeIcon icon={faGuitar} />;
const gamepadIcon = <FontAwesomeIcon icon={faGamepad} />;
const foodIcon = <FontAwesomeIcon icon={faHamburger} />;

function Interests() {
  return (
    <section className="col-lg-12 col-md-12 d-none d-md-block interests-container">
      <div className="row interests-subcontainer">
        <h2 className="mb-5">Interests</h2>
        <div className="subheading mb-3">Extra-Curriculars:</div>
        <div className="interestes-table">
          <div className="fa-ul margin-btm">
            <li>
              <span className="nav-item-icon">{cameraIcon}</span>
              Avid Shutterbug
            </li>
            <li>
              <span className="nav-item-icon">{routeIcon}</span>
              Travelling
            </li>
            <li>
              <span className="nav-item-icon">{mountainIcon}</span>
              Trekking
            </li>
          </div>
          <div className="fa-ul margin-btm">
            <li>
              <span className="nav-item-icon text-primary">
                “<i>A picture is worth a thousand words.</i>”
              </span>
            </li>
            <li>
              <span className="nav-item-icon text-primary">
                “
                <i>
                  We travel not to escape life but for life not to escape us.
                </i>
                ”
              </span>
            </li>
            <li>
              <span className="nav-item-icon text-primary">
                “
                <i>
                  Of all the paths you take in life, make sure a few of them are
                  dirt.
                </i>
                ”
              </span>
            </li>
          </div>
        </div>
        <div className="subheading mb-3">Indoors:</div>
        <div className="interestes-table">
          <div className="fa-ul margin-btm">
            <li>
              <span className="nav-item-icon">{guitarIcon}</span>
              Rock Music
            </li>
            <li>
              <span className="nav-item-icon">{gamepadIcon}</span>
              Gaming
            </li>
            <li>
              <span className="nav-item-icon">{foodIcon}</span>
              Cooking
            </li>
          </div>
          <div className="fa-ul margin-btm">
            <li>
              <span className="nav-item-icon text-primary">
                “<i>If Music is a Place, then ROck is the Road.</i>”
              </span>
            </li>
            <li>
              <span className="nav-item-icon text-primary">
                “<i>At the end of the tunnel, you'll respawn.</i>”
              </span>
            </li>
            <li>
              <span className="nav-item-icon text-primary">
                “<i>Let Food be thy Medicine and Medicine be thy Food.</i>”
              </span>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interests;
