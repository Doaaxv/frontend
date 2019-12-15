import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./Components/Portfolio"
import Jobs from "./JobsComponents/JobsList"
import DevDash from "./Developer_dash/Developer_dash"

// import SideNav from './side-nav/SideNav'
function App() {
  return (
    <Router>
    
     <SideNav/>
      
     <Route exact path="/" exact component={Landingpage}/>
     <Route exact path="/Portfolio" exact component={Portfolio}/>
     <Route path="/jobs" component={Jobs}/>
     <Route path = "/dashboard" component={DevDash}/>
     {/* <Route path ="/dashboard" component={EmployerDash}/> */}
    </Router>
  );
}

export default App;
