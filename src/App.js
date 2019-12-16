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
import axios from 'axios'
import Try from "./Components/Try"

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
      <SideNav/>
      <Route exact path="/" exact component={Landingpage}/> 
     <Route exact path="/login" exact component={Login}/>
     <Route exact path="/Try" exact component={Try}/>
     <Route exact path="/Signup" exact component={Signup}/>
     <Route path="/jobs" component={Jobs}/>
     <Route path = "/dashboard" component={DevDash}/>
     
      <Route exact path="/Portfolio" exact render={props => (<Portfolio {...props}  data={this.state.data}  />)} />
     </Router>
    )
  }
}
