import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link ,withRouter,browserHistory } from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./portfolio/Portfolio"
import Jobs from "./JobsComponents/JobsList"
import DevDash from "./Developer_dash/Developer_dash"
import Login from "./Atho/Login"
import SignupEmp from "./Atho/Signup_emp"
import SignupDev from "./Atho/Signup_dev"
import EditProfile from "./Developer_dash/Editprofile"
import changepassword from "./Developer_dash/ChangePass"
import Username from "./Developer_dash/GetUsernamePage"
import Projects from "./Developer_dash/project/ProjectsPage"
import Job from "./Employeer_dash/jobs/JobNav"

// import Projects from "./Developer_dash/ProjectsPage"
// import AddProject from "./Developer_dash/AddProject"
import Logo from "./Components/logo"
import AddProject from "./Developer_dash/project/AddProject"
import Signup from "./Atho/Signup_emp"
import addPortfolio from "./portfolio/AddPortfolio"
import EditProject from "./Developer_dash/project/EditProject"
// import addjobs from "./Developer_dash/jobs/Addjobs"
import addjobs from "./Employeer_dash/jobs/AddJob"

import JobRequests from "./Developer_dash/jobs/JobRequests"

import EmpDash from "./Employeer_dash/Employer_dash"

import axios from 'axios'
import Register from "./Atho/RejesterDev"
import JobListEmp from "./Employeer_dash/JobsListEmp"

import JobNav from "./Employeer_dash/jobs/JobNav"

import dotenv from 'dotenv';
dotenv.config();
// import UploadImage from "./ImageUpload/UploadImage"
//import SideNav from './side-nav/SideNav'


export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        data:[]
    };
  }
  componentDidMount()
  { 
    console.log('called component didmount')
    axios.get('http://localhost:5000/project')
      .then(res =>{
        console.log(res.data);
        this.setState({data:res.data})          
      })   
  }
  render() {
    console.log(this.state.data);
    return (
      <Router>
        <SideNav />
        <Logo/>
        <Route exact path="/" exact component={Landingpage} />
        {/* <Route exact path="/addPortfolio" exact component={addPortfolio}/> */}
        <Route exact path="/Portfolio/:username" exact component={Portfolio} />

        {(localStorage.usertoken) ? null: 
        <Route exact path="/login" exact component={Login} />}
        {(localStorage.usertoken) ? null: 
        <Route exact path="/Signup-dev" exact component={SignupDev} />}
        {(localStorage.usertoken) ? null: 
        <Route exact path="/Signup-emp" exact component={SignupEmp} />}

        {/* <Route path="/jobs" component={Jobs} /> */}

        {/* <Route path="/editprofile" component={EditProfile} /> */}

        {(localStorage.usertoken) ? 
        <Route path="/changepassword" component={changepassword}/> : null}

        {/* <Route path="/projects" component={Projects}/>  */}
        <Route path="/job" component={Job}/>
        {/* <Route path="/dashboard/addProject" component={AddProject}/> */}
        
        <Route path = "/addjobs" component = {addjobs}/>
        {/* <Route path = "/EditProject" component={EditProject}/> */}

       {/* <Route exact path="/Try" exact component={Try}/> */}
       {(localStorage.usertoken) ?  
        <Route path = "/dashboard" component={DevDash}/> :null }
       <Route path="/jobslist" component={JobListEmp}/>
       {/* <Route path ="/uploadimage" component={UploadImage}/> */}
       {(localStorage.usertoken) ? null: 
       <Route path="/RegisterDev" component={Register}/>}

       {/* <Route path = "/JobRequests" component={JobRequests}/> */}
       <Route path = "/EmpDash" component = {EmpDash}/>
       <Route path = "/jobnav" component={JobNav}/>
       </Router>
    )
  }
}
