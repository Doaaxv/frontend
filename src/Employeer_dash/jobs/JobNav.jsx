import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class JobNav extends Component {
  render() {
    return (
      <div style={{background:"pink"}}>
        <br>
        </br>
        <br></br>
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/EmpDash/Emp-Job">Create Job </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/EmpDash/Emp-Job">Requested </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Assigned </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/EmpDash/Emp-Jobs">Unassigned </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">History</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
