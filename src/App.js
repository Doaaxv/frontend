import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import SideNav from "./Components/SideNav";
import Portfolio from "./portfolio/Portfolio";
import Jobs from "./JobsComponents/JobsList";
import DevDash from "./Developer_dash/Developer_dash";
import Login from "./Atho/Login";
import SignupEmp from "./Atho/Signup_emp";
import SignupDev from "./Atho/Signup_dev";
import changepassword from "./Developer_dash/ChangePass";
import Logo from "./Components/logo";
import EmpDash from "./Employeer_dash/Employer_dash";
import axios from "axios";
import Register from "./Atho/RejesterDev";
import JobListEmp from "./Employeer_dash/JobsListEmp";
import JobNav from "./Employeer_dash/jobs/JobNav";
import dotenv from "dotenv";
dotenv.config();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/project").then(res => {
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <Router>
        <SideNav />
        <Logo />
        <Route exact path="/" exact component={Landingpage} />
        <Route path="/jobs" component={Jobs} />
        {localStorage.usertoken ? (<Route exact path="/Portfolio/:username" exact component={Portfolio}/>):null}
        {localStorage.usertoken ? null : ( <Route exact path="/login" exact component={Login} /> )}
        {localStorage.usertoken ? null : ( <Route exact path="/Signup-dev" exact component={SignupDev} /> )}
        {localStorage.usertoken ? null : ( <Route exact path="/Signup-emp" exact component={SignupEmp} /> )}
        {localStorage.usertoken ? ( <Route path="/changepassword" component={changepassword} /> ) : null}
        {localStorage.userType === 1 ? ( <Route path="/dashboard" component={DevDash} /> ) : null}
        {localStorage.usertoken ? null : ( <Route path="/RegisterDev" component={Register} /> )}
        {localStorage.userType === 2 ? ( <Route path="/EmpDash" component={EmpDash} />): null}}
        {localStorage.userType === 2 ? ( <Route path="/jobslist" component={JobListEmp} />): null}}
        {localStorage.userType === 2 ? ( <Route path="/jobnav" component={JobNav} />): null}}
      </Router>
    );
  }
}
