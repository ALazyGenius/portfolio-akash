import  React, {useEffect}  from 'react';
import ReactGa from "react-ga";

import './Portfolio.css';
import Dashboard from './Dashboard/Dashboard'

function Portfolio() {

  useEffect(() => {
    ReactGa.initialize("UA-164036913-1");

    //To Report Page Views
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="portfolio container-fluid">
      <Dashboard></Dashboard>
    </div>
  );
}

export default Portfolio;
