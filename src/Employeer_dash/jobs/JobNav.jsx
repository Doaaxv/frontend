import React, { Component } from "react";

export default class JobNav extends Component {
  render() {
    return (
      <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/dashboard/Emp-Job">Crate Job </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/Emp-Job">Requested </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Assigned </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard/dashboard/Emp-Jobs">Unassigned </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">History</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
