import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./Components/Portfolio"
import Jobs from "./JobsComponents/JobsList"
import DevDash from "./Developer_dash/Developer_dash"
import Login from "./Atho/Login"

import SignupEmp from "./Atho/Signup_emp"
import SignupDev from "./Atho/Signup_dev"
import EditProfile from "./Developer_dash/Editprofile"
import changepassword from "./Developer_dash/ChangePass"
import Username from "./Developer_dash/GetUsernamePage"
import Projects from "./Developer_dash/ProjectsPage"
import AddProject from "./Developer_dash/AddProject"

import Signup from "./Atho/Signup_emp"
import axios from 'axios'
import Try from "./Components/Try"

import JobListEmp from "./Employeer_dash/JobsListEmp"
import dotenv from 'dotenv';
dotenv.config();
// import UploadImage from "./ImageUpload/UploadImage"
// import SideNav from './side-nav/SideNav'


export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        data:[]
    };
  }

  componentDidMount()
  { 
    console.log('called component did mount')
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

        {/* <Route exact path="/" exact component={Landingpage} />
        <Route exact path="/Portfolio" exact component={Portfolio} /> */}

        {/* <Route path ="/dashboard" component={EmployerDash}/> */}

        <Route exact path="/" exact component={Landingpage} />
        <Route exact path="/Portfolio" exact render={props => (<Portfolio {...props}  data={this.state.data}  />)} />
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/Signup-dev" exact component={SignupDev} />
        <Route exact path="/Signup-emp" exact component={SignupEmp} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/dashboard" component={DevDash} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/changepassword" component={changepassword}/>
        <Route path="/username/:username" component={Username}/>
        <Route path="/projects" component={Projects}/> 
        <Route path="/addProject" component={AddProject}/>
       <Route exact path="/Try" exact component={Try}/>
       <Route path = "/dashboard" component={DevDash}/>
       <Route path="/jobslist" component={JobListEmp}/>
       {/* <Route path ="/uploadimage" component={UploadImage}/> */}
       </Router>
    )
  }
}
