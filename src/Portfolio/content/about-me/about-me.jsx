import React, {  } from "../../../../node_modules/react";
import "./about-me.css";

import { SocialIcon } from "react-social-icons";

function AboutMe() {
  return (
    <section className="col-lg-12 col-md-12 d-none d-md-block about-me-container">
      <div className="mx-auto about-me-personal-data">
        <div className="header-first-name">
          <h1 className="mb-0">
            Akash
            <span className="text-primary header-sur-name">Mishra</span>
          </h1>
        </div>
        <div className="subheading-me">
          <p className="lead font-weight-normal address">
            Consultant&nbsp;·&nbsp;Deloitte&nbsp;·&nbsp;
          </p>
          <p className="lead font-weight-normal phone-number">
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
      <div className="about-me-exp-data">
        <p className="lead mb-5">
          Senior UI Developer with a focus on cross-platform strategy,
          interaction and mobility. I am passionate about good design and
          intuitive user experience.I am experienced in leveraging agile
          frameworks to provide a robust synopsis for high level overviews.
          Iterative approaches to corporate strategy foster collaborative
          thinking to further the overall value proposition.
        </p>
      </div>
      <div className="social-icons">
        <span>
          <SocialIcon url="https://linkedin.com/akashmishra11/" />
        </span>
        <span>
          <SocialIcon url="https://github.com/ALazyGenius" />
        </span>
        <span>
          <SocialIcon url="https://twitter.com/AkashMi19221903" />
        </span>
        <span>
          <SocialIcon url="https://www.facebook.com/akash.mishra.733" />
        </span>
      </div>
    </section>
  );
}

export default AboutMe;
