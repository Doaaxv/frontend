import React, { Component } from "react";
import {Nav} from "react-bootstrap"

export default class JobNav extends Component {
  render() {
    return (
      <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/dashboard/Dev-Job">requests </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Pending requests</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">assigned project </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
