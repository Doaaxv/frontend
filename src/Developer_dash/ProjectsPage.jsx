import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { localhost } from '../GlobalVars'
import ProjectCards from "./ProjectCards"
export default class ProjectsPage extends Component {
    state= {
        projects:null
    }

    componentDidMount = () =>{
        var user_id = jwt_decode(localStorage.usertoken).user._id
        axios.get(`${localhost}/project/developer/${user_id}`)
        .then(res=>{
            console.log(res.data)
            this.setState({projects:res.data})
    })
        .catch(err=>console.log(err))
    }

    render() {
       
        return (
            <div>
                <p>Hello</p>
                <a type="button" href="/addProject" >Add new project</a>
                 {this.state.projects != null &&  this.state.projects.map(item=><ProjectCards data={item}/>) }
            </div>
        )
    }
}
