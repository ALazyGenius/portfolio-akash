import React, { Component } from "react";
import "./education.css";

class Education extends Component {
  state = {};
  render() {
    return (
      <section className="col-lg-12 col-md-12 d-none d-md-block education-container">
        <div class="row education-subcontainer">
          <h2 class="mb-5">Education</h2>
          <div class="row individual-container">
            <div class="col-md-9 resume-content">
              <h3 class="mb-0">UPTU</h3>
              <div class="subheading mb-3">Bachelors of Technology</div>
              <p className="text-sub">
                Electronics | Instrumentation
              </p>
              <p>
                Distinction | Honors | 77%
              </p>
            </div>
            <div class="col-md-3 resume-date text-md-right">
              <span class="text-primary">Aug 2012 - Jun-2016</span>
            </div>
          </div>
          <div class="row individual-container">
            <div class="col-md-9 resume-content">
              <h3 class="mb-0">ISC</h3>
              <div class="subheading mb-3">Secondary High School</div>
              <p className="text-sub">
                Science | Computers
              </p>
              <p>
                Distinction | Honors | 93%
              </p>
            </div>
            <div class="col-md-3 resume-date text-md-right">
              <span class="text-primary">Mar 2011 - Apr 2012</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9 resume-content">
            <h3 class="mb-0">ICSE</h3>
            <div class="subheading mb-3">High School</div>
            <p className="text-sub">
                Science | Computers
              </p>
              <p>
                Distinction | Honors | 90%
              </p>
            </div>
            <div class="col-md-3 resume-date text-md-right">
            <span class="text-primary">Mar 2009 - Apr 2010</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
