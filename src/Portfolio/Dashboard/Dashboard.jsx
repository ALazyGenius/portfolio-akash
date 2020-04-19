import React, { Component } from "../../../node_modules/react";
import NavBar from "../nav-bar/nav-bar";
import SideBar from "../side-bar/side-bar";
import Content from "../content/content"; 
import "./Dashboard.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-container container-fluid">
        <div className="row dashboard-subcontainer">
          {/* Navbar section begins */}
          <div className="col-md-12">
            <NavBar></NavBar>
          </div>
          {/* Navbar Section Ends */}

          {/* Main Section Starts */}
          <div className="row body-container">
            {/* Sidebar Section Begins */}
            <div className="col-md-2 sidebar">
              <SideBar></SideBar>
            </div>
            {/* Sidebar Section Ends */}
            {/* Content Section Begins */}
            <div className="col-md-10 offset-md-2 about-me">
              <Content></Content>
            </div>
            {/* Content Section Ends */}
          </div>
          {/* Main Section Ends */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
