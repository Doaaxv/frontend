import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./portfolio/Portfolio"
import Jobs from "./JobsComponents/JobsList"
import DevDash from "./Developer_dash/Developer_dash"
import Login from "./Atho/Login"
import SignupEmp from "./Atho/Signup_emp"
import SignupDev from "./Atho/Signup_dev"
import changepassword from "./Developer_dash/ChangePass"
import Job from "./Employeer_dash/jobs/JobNav"
import Logo from "./Components/logo"
import addjobs from "./Employeer_dash/jobs/AddJob"
import EmpDash from "./Employeer_dash/Employer_dash"
import axios from 'axios'
import Register from "./Atho/RejesterDev"
import JobListEmp from "./Employeer_dash/JobsListEmp"
import JobNav from "./Employeer_dash/jobs/JobNav"
import dotenv from 'dotenv';
dotenv.config();

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
        <Route exact path="/Portfolio/:username" exact component={Portfolio} />
        {(localStorage.usertoken) ? null: 
        <Route exact path="/login" exact component={Login} />}
        {(localStorage.usertoken) ? null: 
        <Route exact path="/Signup-dev" exact component={SignupDev} />}
        {(localStorage.usertoken) ? null: 
        <Route exact path="/Signup-emp" exact component={SignupEmp} />}
        <Route path="/jobs" component={Jobs} />
        {(localStorage.usertoken) ? 
        <Route path="/changepassword" component={changepassword}/> : null}
        <Route path="/job" component={Job}/>
        {(localStorage.usertoken) ?  
        <Route path = "/dashboard" component={DevDash}/> :null }
       <Route path="/jobslist" component={JobListEmp}/>
       {(localStorage.usertoken) ? null: 
       <Route path="/RegisterDev" component={Register}/>}
       <Route path = "/EmpDash" component = {EmpDash}/>
       <Route path = "/jobnav" component={JobNav}/>
       </Router>
    )
  }
}
