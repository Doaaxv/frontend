import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class Signup_emp extends Component {
    render() {
        return (
            <div>
                 <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="First name"
                group
                type="text"
                validate
                error="wrong"
              />
                <MDBInput
                label="Last name"
                group
                type="text"
                validate
                error="wrong"
              />
             <MDBInput
                label="password"
                group
                type="password"
                validate
                error="wrong"
              />
            <MDBInput
                label="Confirm password"
                group
                type="password"
                validate
                error="wrong"
              />
              <MDBInput
                label="email"
                group
                type="email"
                validate
                error="wrong"
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </div>
        )
    }
}
