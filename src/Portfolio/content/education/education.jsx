import React, {  } from "react";
import "./education.css";

function Education() {
  
  return (
    <section className="col-lg-12 col-md-12 d-md-block education-container">
      <div className="row education-subcontainer">
        <h2 className="mb-5">Education</h2>
        <div className="row individual-container">
          <div className="col-md-9 resume-content">
            <h3 className="mb-0">UPTU</h3>
            <div className="subheading mb-3">Bachelors of Technology</div>
            <p className="text-sub">Electronics | Instrumentation</p>
            <p>Distinction | Honors | 77%</p>
          </div>
          <div className="col-md-3 resume-date text-md-right">
            <span className="text-primary">Aug 2012 - Jun-2016</span>
          </div>
        </div>
        <div className="row individual-container">
          <div className="col-md-9 resume-content">
            <h3 className="mb-0">ISC</h3>
            <div className="subheading mb-3">Secondary High School</div>
            <p className="text-sub">Science | Computers</p>
            <p>Distinction | Honors | 93%</p>
          </div>
          <div className="col-md-3 resume-date text-md-right">
            <span className="text-primary">Mar 2011 - Apr 2012</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 resume-content">
            <h3 className="mb-0">ICSE</h3>
            <div className="subheading mb-3">High School</div>
            <p className="text-sub">Science | Computers</p>
            <p>Distinction | Honors | 90%</p>
          </div>
          <div className="col-md-3 resume-date text-md-right">
            <span className="text-primary">Mar 2009 - Apr 2010</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
