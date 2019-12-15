import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./Components/Portfolio"
import axios from 'axios'

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
      <Route exact path="/Portfolio" exact render={props => (<Portfolio {...props}  data={this.state.data}  />)} />
     </Router>
    )
  }
}