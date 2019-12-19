import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import {localhost} from "../../GlobalVars"

import { Col, Row, Container, Button, Card } from "react-bootstrap";
export default class JobsCardsEmp extends Component {

    render() {
        
        return (
            <div>
                <Card>
          <Card.Body>
            <h1>{this.props.data.title}</h1>
            <Card.Text>{this.props.data.description}
            <br></br>
            <button onClick={()=>this.props.showDetails(this.props.data.requests,this.props.data._id)}>show details</button>
            </Card.Text>
          </Card.Body>
        </Card> 
              
            </div>
        )
    }
}
