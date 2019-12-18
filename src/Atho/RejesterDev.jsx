import React, { Component } from 'react'
import SignupDev from "./Signup_dev"
import AddPort from "../portfolio/AddPortfolio"
import img1 from "../Images/img1.png"
import './Atho.css'
import Portfolio from "../portfolio/Portfolio"
import { Button } from 'react-bootstrap';


export default class RejesterDev extends Component {

    state={
        show:true,
        shown:false,
        userid:""
    }

    toggleSub = (id,username)=>{
        this.setState({show:false,userid:id,username:username})
    }

    render() {


        console.log(this.state.userid)

        return (
            <div >
                <img style={{ width: '100%', height: '100%'  }}  className="background"
                src={img1} />
                {console.log(this.state.userid)}
               {this.state.show == true && <SignupDev toggleSub={this.toggleSub}/>}
               {this.state.show == false && <AddPort username={this.state.username} user_id={this.state.userid}/>} 
            
            </div>
        )
    }
}
