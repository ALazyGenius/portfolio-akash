import React, { Component } from "react";
import '../../Images/background-dashboard.jpg'
import './Dashboard.css';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-container container-fluid">
          <div className="dashboard-header row">
              <div className="col-lg-3 col-md-3 col-sm-4 img-center">
                  <img className="dashboard-image" src={require("../../Images/lock.jpg")} alt=""/>
              </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
