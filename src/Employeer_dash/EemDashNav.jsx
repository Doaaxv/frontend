import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class EemDashNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/">Jobs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
