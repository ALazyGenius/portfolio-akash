import React, {  } from "../../../node_modules/react";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <section className="col-lg-12 col-md-12">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">
          Lorem Ipsum
        </a>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </nav>
    </section>
  );
}

export default NavBar;
