import React, { Component } from 'react'
import { Col, Row, Form, Container, Button,DropdownButton,Dropdown } from 'react-bootstrap';
import axios from 'axios';
import {localhost} from "../GlobalVars"
import jwt_decode from 'jwt-decode'
import JCards from "./JobsCardsEmp"
import DCards from "./DevsCards"
export default class JobsListEmp extends Component {

    state = {
        jobs:null,
        show:false,
        details:null,
        job_id:null,
        userId:(localStorage.usertoken?jwt_decode(localStorage.usertoken).user._id:null)}

    componentDidMount = () =>{
        if(localStorage.usertoken){
        axios.get(`${localhost}/job/employer/${jwt_decode(localStorage.usertoken).user._id}`)
        .then(r=>{
            console.log("JOBBBBBBBBB")
            this.setState({jobs:r.data})
        })
        .catch(err=>console.log(err))}
    }
    
    showDetails = (item,job_id) =>{
        console.log(item)
        // var reqs = item.map(res => <p>{res}</p>)
        this.setState({details:item,show:true,job_id:job_id})
    }
   

    render() {
        if(this.state.details!=null){
            console.log(this.state.details)
        }
        return (
            <Container>
                <h1>HelloOOOOOOOOOOOOO</h1>
                <Row>
                    <Col>
                    {this.state.jobs!=null && this.state.jobs.map(item=>{
                        // console.log(item.title)
                        // && !item.requests.includes(this.state.userId)
                        if(item.status == "unassigned" ){
                            // console.log("REQ")
                            // console.log(item.requests)
                            return <JCards data={item} showDetails={this.showDetails} />
                        }
                            // return <div> <p>{item.title}</p> <button onClick={this.addToReq(item._id)}>submit</button> </div>}
                        })}
                    </Col>
                    {this.state.job_id != null && this.state.details!=null && this.state.show != false && 
                    <Col>
                    <p>REQ COL</p>
                      <p>{this.state.details.map(res=> <DCards job_id={this.state.job_id} userId={res} />)}</p>   
                    </Col>
                    }
                </Row>
            </Container>
        )
    }
}
