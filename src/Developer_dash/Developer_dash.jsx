import React, { Component } from "react";
import {Navbar,Nav,} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import DashDevNavBar from "./DashDevNavBar"
import EditProfile from "./Editprofile"
import Projects from "./project/ProjectsPage"
import Jobs from "./jobs/Addjobs"

export default class Developer_dash extends Component {
  render() {
    return (
      <div>
        <DashDevNavBar/>
        <Router>
        {/* <Route path="/jobs" component = {Jobs} /> */}
        <Route path="/dashboard/editprofile" component = {EditProfile} />
        <Route path="/dashboard/projects" component = {Projects}/> 
        <Route path="/dashboard/job" component = {Jobs}/>
        {/* <Route path="/addProject" component={AddProject}/>
       <Route path = "/dashboard" component={DevDash}/> */}
       </Router>
      </div>
    );
  }
}

// var projects = <Nav fill variant="tabs" defaultActiveKey="/home">
// <Nav.Item>
// <Nav.Link href="/addProject">add project </Nav.Link>
// </Nav.Item>
// <Nav.Item>
// <Nav.Link href="/projects">Show project</Nav.Link>
// </Nav.Item>
// </Nav>

// var jobs =  <Nav fill variant="tabs" defaultActiveKey="/home">
// <Nav.Item>
// <Nav.Link href="/addProject">add jobs </Nav.Link>
// </Nav.Item>
// <Nav.Item>
// <Nav.Link href="/">requests</Nav.Link>
// </Nav.Item>
// <Nav.Item>
// <Nav.Link href="/">Pending requests</Nav.Link>
// </Nav.Item>
// <Nav.Item>
// <Nav.Link href="/">Pending requests</Nav.Link>
// </Nav.Item>
// <Nav.Item>
// <Nav.Link href="/">assigned project </Nav.Link>
// </Nav.Item>
// </Nav>