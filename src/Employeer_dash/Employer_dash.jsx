import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashEmpNavBar from "./EemDashNav";
import projectNav from "./project/ProjectNav";
import JobNav from "./jobs/JobNav";

import EditProfile from "./Editprofile";
import Projects from "./project/ProjectsPage";
import addjobs from "./jobs/Addjobs";

export default class Employer_dash extends Component {
  render() {
    return (
      <div>
        <DashEmpNavBar/>
        <br/>
        <Router>
          <Route path="/dashboard/Emp-editprofile" component={EditProfile} />
          <Route path="/dashboard/Emp-Projects" component={projectNav} />
          <Route path="/dashboard/Emp-Jobs" component={JobNav} />
          <Route path="/dashboard/Emp-Projects/projects" component={Projects} />
          <Route path="/dashboard/Emp-Projects/addjobs" component={addjobs} />
        </Router>
      </div>
    );
  }
}