import React, {  } from "../../../../node_modules/react";
import "./experience.css";

const Experience = props => {
  return (
    <section className="col-lg-12 col-md-12 d-none d-md-block experience-container">
      <div className="row experience-subcontainer">
        <h2 className="mb-5">Experience</h2>
        <div className="row individual-container">
          <div className="col-md-9 resume-content">
            <h3 className="mb-0">Senior Web Developer</h3>
            <div className="subheading mb-3">Deloitte.</div>
            <p>
              Worked on complete redesign of multiple portals’ for the largest
              provider of insurance in US, the side of the application, which is
              being used by customers, multiple vendors and producers. The
              application is developed on the latest NRWL framework of Angular 7
              in conjunction with the Angular Material Framework. State control
              with NGXS, style pre-processor was SCSS.
            </p>
          </div>
          <div className="col-md-3 resume-date text-md-right">
            <span className="text-primary">Mar 2020 - Present</span>
          </div>
        </div>
        <div className="row individual-container">
          <div className="col-md-9 resume-content">
            <h3 className="mb-0">Senior Front End Developer</h3>
            <div className="subheading mb-3">Mindtree Ltd.</div>
            <p>
              Worked on complete redesign of multiple portals’ for the largest
              provider of insurance in US, the side of the application, which is
              being used by customers, multiple vendors and producers. The
              application is developed on the latest NRWL framework of Angular 7
              in conjunction with the Angular Material Framework. State control
              with NGXS, style pre-processor was SCSS.
            </p>
          </div>
          <div className="col-md-3 resume-date text-md-right">
            <span className="text-primary">Mar 2019 - Mar 2020</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 resume-content">
            <h3 className="mb-0">Front End Developer</h3>
            <div className="subheading mb-3">Infosys Ltd.</div>
            <p>
              Worked on complete redesign of multiple clients’ website portals
              and apps in the banking and financial services field, the side of
              the application, which is being used by millions of customers. The
              designs were compatible with all the latest screen sizes and ran
              on a smooth 60 frames per second. The applications were developed
              on the latest Angular 4, Polymer frameworks.
            </p>
          </div>
          <div className="col-md-3 resume-date text-md-right">
            <span className="text-primary">Jan 2017 - Mar 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
