import React, { Component } from 'react'
import SignupDev from "./Signup_dev"
import AddPort from "../portfolio/AddPortfolio"
import Portfolio from "../portfolio/Portfolio"
import { Button } from 'react-bootstrap';
export default class RejesterDev extends Component {

    state={
        show:true,
        shown:false,
        userid:""
    }

    toggleSub = (id,username)=>{
        console.log("HEEEYYYYYY in father component")
        console.log(id+"  "+username)
        this.setState({show:false,userid:id,username:username})
    }

    render() {


        console.log(this.state.userid)

        return (
            <div>
                {console.log(this.state.userid)}
                <Button>gggg</Button>
               {this.state.show == true && <SignupDev toggleSub={this.toggleSub}/>}
               {this.state.show == false && <AddPort username={this.state.username} user_id={this.state.userid}/>} 
               {/* {this.state.shown === false && <Portfolio user_id={this.state.userid}/>}   */}
            </div>
        )
    }
}
