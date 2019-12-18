import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import {localhost} from "../GlobalVars"

export default class JobsCardsEmp extends Component {

    
    
    render() {
        return (
            <div>
               <p>{this.props.data.title}</p>  
               <button onClick={()=>this.props.showDetails(this.props.data.requests,this.props.data._id)}>show details</button>
            </div>
        )
    }
}
