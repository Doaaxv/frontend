import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class JobNav extends Component {
  render() {
    return (
      <div>
        <br/>
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/">Crate Job </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Requested </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Assigned </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Unassigned </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">History</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
