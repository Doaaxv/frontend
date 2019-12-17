import React, { Component } from "react";
import { Card, Button, Nav } from "react-bootstrap";
import EditProject from "./EditProject";
export default class ProjectCards extends Component {
  render() {
    return (
      <div>
        <Card>
            <br/>
          <Card.Header as="h5">{this.props.data.title}</Card.Header>
          <Card.Body>
            <Card.Img
              variant="top"
              src={this.props.data.image}
              style={{ width: "18rem" }}
            />
            <Card.Text>{this.props.data.description}</Card.Text>
            <Button href = "/project/:id">Edit project</Button>
            <Button href = "/project/:id">delete project</Button>
            <Button href = "/project/:id">View project</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
