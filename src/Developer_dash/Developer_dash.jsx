import React, { Component } from 'react'
import { Col, Row, Form, Container, Button } from 'react-bootstrap';

export default class Developer_dash extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {/* menu items */}
                    <Col md={3} style={{ background: "pink" }}>
                        <h1>first col</h1>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Edit profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Jobs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Chat</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Website</a>
                            </li>
                            
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                    </Col>

                    {/* menu items details */}
                    <Col md={9} style={{ background: "blue" }}>
                        <h1>second col</h1>
                    </Col>

                </Row>
            </Container>
        )
    }
}
