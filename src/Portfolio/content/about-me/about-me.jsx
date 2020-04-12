import React, { Component } from "../../../../node_modules/react";
import "./about-me.css";

import { SocialIcon } from "react-social-icons";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <section className="col-lg-12 col-md-12 d-none d-md-block about-me-container">
        <div class="mx-auto about-me-personal-data">
          <div className="header-first-name">
            <h1 class="mb-0">
              Akash
              <span class="text-primary header-sur-name">Mishra</span>
            </h1>
          </div>
          <div className="subheading">
            <p class="lead font-weight-normal address">
              Consultant&nbsp;·&nbsp;Deloitte&nbsp;·&nbsp;
              ·&nbsp;
            </p>
            <p class="lead font-weight-normal phone-number">
              8585952877&nbsp;·&nbsp;
            </p>
            <a
              className="lead font-weight-normal phone-number"
              href="mailto:akashmishramac13@gmail.com"
            >
              akashmishramac13@gmail.com
            </a>
          </div>
        </div>
        <div class="about-me-exp-data">
          <p class="lead mb-5">
            Senior UI Developer with a focus on cross-platform strategy,
            interaction and mobility. I am passionate about good design and
            intuitive user experience.I am experienced in leveraging agile
            frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative
            thinking to further the overall value proposition.
          </p>
        </div>
        <div class="social-icons">
          <a href="https://linkedin.com/akashmishra11/">
            <SocialIcon url="https://linkedin.com/akashmishra11/" />
          </a>
          <a href="https://github.com/ALazyGenius">
            <SocialIcon url="https://github.com/ALazyGenius" />
          </a>
          <a href="https://twitter.com/AkashMi19221903">
            <SocialIcon url="https://twitter.com/AkashMi19221903" />
          </a>
          <a href="https://www.facebook.com/akash.mishra.733">
            <SocialIcon url="https://www.facebook.com/akash.mishra.733" />
          </a>
        </div>
      </section>
    );
  }
}

export default AboutMe;
