import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import {localhost} from "../GlobalVars"

export default class JobsCardsEmp extends Component {

    addToReq=()=>{
        // console.log("ID: "+this.props.data._id)
        // 5df4a4e9f5dba32f6442306d
        // jwt_decode(localStorage.usertoken).user._id
        axios.put(`${localhost}/job/addreq/${this.props.data._id}`,{requests:jwt_decode(localStorage.usertoken).user._id})
        .then(a=>{
            console.log("adding to req")
            console.log(a)
        })
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
               <p>{this.props.data.title}</p> 
               <button onClick={this.addToReq}>submit</button>  
               <button onClick={()=>this.props.showDetails(this.props.data.requests,this.props.data._id)}>show details</button>
            </div>
        )
    }
}
