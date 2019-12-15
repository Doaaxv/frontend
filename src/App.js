

import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./Components/Portfolio"
import Jobs from "./JobsComponents/JobsList"
import DevDash from "./Developer_dash/Developer_dash"
import Login from "./Atho/Login"
import Signup from "./Atho/Signup_emp"


// import SideNav from './side-nav/SideNav'
export default class App extends Component {
  render() {
    return (
    <Router>
    
     <SideNav/>
      
     <Route exact path="/" exact component={Landingpage}/>
     <Route exact path="/Portfolio" exact component={Portfolio}/>
   
     {/* <Route path ="/dashboard" component={EmployerDash}/> */}

     <Route exact path="/" exact component={Landingpage}/>
     <Route exact path="/Portfolio" exact component={Portfolio}/>
     <Route exact path="/login" exact component={Login}/>
     <Route exact path="/Signup" exact component={Signup}/>
     <Route path="/jobs" component={Jobs}/>
     <Route path = "/dashboard" component={DevDash}/>

    </Router>
    )
  }
}
