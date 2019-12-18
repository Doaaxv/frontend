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

    chooseDev = () => {
        axios.put(`${localhost}/job/developer/${this.props.job_id}`, { dev_id: this.props.userId })
            .then(result => {
                console.log(result)
                // console.log("RESULT")
                this.setState({user:result.data})
                //refresh the page HEREEEEEEEEEEEEEEEEEEEE/////////////////////////////////////////////////
            }
            )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>IIII</p>
                {this.state.user != null &&
                    <div>
                        {/* add an href so the employer can check the developer page */}
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
