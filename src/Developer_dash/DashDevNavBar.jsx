import React, { Component } from 'react'
import {Navbar,Nav,} from "react-bootstrap";

export default class DashDevNavBar extends Component {
    render() {
        return (
            <div>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="///">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> <Nav className="mr-auto">
              <Nav.Link href="/dashboard/editprofile">Edit profile</Nav.Link>
              <Nav.Link href="/dashboard/Dev-Projects">Projects</Nav.Link>
              <Nav.Link href="/dashboard/Dev-Jobs">Jobs</Nav.Link>
              <Nav.Link>Chat</Nav.Link>
              <Nav.Link>Website</Nav.Link>
             </Nav>
          </Navbar.Collapse>
          </Navbar>
            </div>
        )
    }
}
