import React, { Component } from "react";
import { Card, Button, Nav } from "react-bootstrap";
import axios from "axios"
import {localhost} from "../../GlobalVars"
import ViewProject from "./ViewProject";
import { Redirect } from 'react-router-dom'
export default class ProjectCards extends Component {
state = {
  show : false 
}
  deleteProject = (project) => {
    console.log("delete project")
    console.log(project)
    axios.delete(`${localhost}/project/${this.props.data._id}`)
    .then(result=>{
      alert("deleted successfully")
      window.location.reload()
      console.log(result)
    } ).catch(err=>console.log(err))
  }
 
  editProject = ()=>{
    this.setState({show:true})
  }

  render() {
    return (
      <div>
        <Card>
        {this.state.show && <Redirect 
        to={{ pathname: `/dashboard/EditProject`,
          state:{data:this.props.data}}} />}
            <br/>
          <Card.Header as="h5">{this.props.data.title}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={this.props.data.image}  style={{ width: "18rem" }} />
            <Card.Text>{this.props.data.description}</Card.Text>
            <Button onClick={this.editProject}>Edit project</Button>
            <Button onClick = {this.deleteProject}>delete project</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
