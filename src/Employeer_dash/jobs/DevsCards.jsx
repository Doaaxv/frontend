import React, { Component } from 'react'
import axios from "axios"
import { localhost } from "../../GlobalVars"

import { Col, Row, Container, Button, Card } from "react-bootstrap";

export default class DevsCards extends Component {

    state = { user: null }
    componentDidMount = () => {
        // console.log(this.props.userId)
        console.log("DID MOUT USERS ")
        console.log(this.props.userId)
        axios.get(`${localhost}/user/${this.props.userId}`)
            .then(result => {
                console.log("RESULTTT")
                console.log(result)
                this.setState({ user: result.data })
            })
            .catch(err => console.log(err))
    }

    chooseDev = () => {
        console.log("chose dev")
        axios.put(`${localhost}/job/developer/${this.props.job_id}`, { dev_id: this.props.userId })
            .then(result => {
                console.log(result)
                this.setState({user:result.data})
                window.location.reload()
            }
            )
            .catch(err => console.log(err))
    }

    render() {
        console.log("ZZEEEEZZZZEEEEE")
        console.log(this.state.user)
        return (
            <div>
                {this.state.user != null &&
                      <Card>
                      <Card.Body>
                        <h1><a href={`/Portfolio/${this.state.user.username}`} ><p>{this.state.user.firstname}</p></a></h1>
                        <Card.Text>
                        <button onClick={this.chooseDev}>Choose dev</button>
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                }
            </div>
        )
    }
}
