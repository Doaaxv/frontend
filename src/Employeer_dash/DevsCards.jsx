import React, { Component } from 'react'
import axios from "axios"
import { localhost } from "../GlobalVars"

export default class DevsCards extends Component {

    state = { user: null }
    componentDidMount = () => {
        // console.log(this.props.userId)
        axios.get(`${localhost}/user/${this.props.userId}`)
            .then(result => {
                console.log("RESULT")
                this.setState({ user: result.data })
            })
            .catch(err => console.log(err))
    }

    // 5df50d359da60728988bbf0f
    chooseDev = () => {
        // console.log(`${localhost}/developer/${this.props.userId}`)
        // axios.put(`${localhost}/job/developer/${this.props.userId}`,{dev_id:this.props.userId})
        axios.put(`${localhost}/job/developer/${this.props.job_id}`, { dev_id: this.props.userId })
            .then(result => {
                console.log(result)
                // console.log("RESULT")
                // this.setState({user:result.data})
                //refresh the page HEREEEEEEEEEEEEEEEEEEEE/////////////////////////////////////////////////
            }
            )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.user != null &&
                    <div>
                        <p>{this.state.user.firstname}</p>
                        <p>{this.state.user._id}</p>
                        <p>Link to dev's page</p>
                        <button onClick={this.chooseDev}>Choose dev</button>
                    </div>
                }
            </div>
        )
    }
}
