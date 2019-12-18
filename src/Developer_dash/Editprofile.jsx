import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Alert, Nav , Navbar} from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { useFormik } from 'formik';
import { localhost } from '../GlobalVars'

const validate = values => {
    const errors = {};
    if (!values.firstname) {
        errors.password = "Required"
    }

    if (!values.lastname) {
        errors.password = "Required"
    }

    if (!values.username) {
        errors.username = "Required"
    }
    return errors;
};

const EditForm = () => {
    
    // console.log(jwt_decode(localStorage.usertoken))
    const formik = useFormik({
        initialValues: {
            firstname: jwt_decode(localStorage.usertoken).user.firstname,
            lastname:jwt_decode(localStorage.usertoken).user.lastname,
            link: jwt_decode(localStorage.usertoken).user.link,
            username:jwt_decode(localStorage.usertoken).user.username,
            user:jwt_decode(localStorage.usertoken).user
        },
        validate,
        onSubmit: async (values) => {
            console.log("In submit Handler")
        },
    });
    return (
        <div>
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <MDBInput
                            label="First name"
                            id="firstname"
                            name="firstname"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                        />
                        {formik.touched.firstname && formik.errors.firstname ? (
                            <div>{formik.errors.firstname}</div>
                        ) : null}
                        <MDBInput
                            label="Last name"
                            id="lastname"
                            name="lastname"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastname}
                        />
                        {formik.touched.lastname && formik.errors.lastname ? (
                            <div>{formik.errors.lastname}</div>
                        ) : null}
                        <MDBInput
                            label="Username"
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div>{formik.errors.username}</div>
                        ) : null}
                        <MDBInput
                            label="Link"
                            id="link"
                            name="link"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.link}
                        />
                        <MDBBtn color="primary" href = "/changepassword" >Change password</MDBBtn>
                        <MDBBtn type="submit" color="primary" onClick={formik.handleSubmit}>Submit</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    );
};

export default EditForm;