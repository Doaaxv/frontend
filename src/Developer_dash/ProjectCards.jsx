import React, { Component } from 'react'

export default class ProjectCards extends Component {
    render() {

        return (
            <div>
                <p>{this.props.data.title}</p>
                <button>Edit project</button>
                <button>delete project</button>
            </div>
        )
    }
}
