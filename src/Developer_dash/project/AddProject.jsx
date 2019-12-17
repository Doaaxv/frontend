import React, { Component } from 'react'
import { useFormik } from 'formik';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Navbar,Nav} from "react-bootstrap";
import Axios from 'axios';
import {localhost} from "../../GlobalVars"
const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.email = 'Required';
    }
    if (!values.description) {
      errors.password = "Required"
    }
    return errors;
  };
const AddProjectForm = () => {
    const formik = useFormik({
        initialValues: {
          title: '',
          description: '',
          image:'',
          github:'',
          link:''
        },
        validate,
        onSubmit: async (values) => {
          Axios.post(`${localhost}/project/create`,values)
          .then(result=>console.log(result))
          .catch(err=>console.log(err))
        },
      });
      return (
        <div>
       <br/>
       <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
    <Nav.Link href="/addProject">add project </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/projects">Show project</Nav.Link>
    </Nav.Item>
  </Nav>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit={formik.handleSubmit}>  
                <MDBInput
                  label="Title"
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title} </div> ) : null}
                <MDBInput
                  label="Description"
                  id="description"
                  name="description"
                  type="textarea"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description} />
                {formik.touched.description && formik.errors.description ? (
                  <div>{formik.errors.description} </div>
                ): null}
                
                <MDBInput
                  label="Image"
                  id="image"
                  name="image"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div>{formik.errors.image}</div>
                ) : null}
                <MDBInput
                  label="Github"
                  id="github"
                  name="github"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.github}
                />
                {formik.touched.github && formik.errors.github ? (
                  <div>{formik.errors.github}</div>
                ) : null}
                <MDBBtn type="submit" color="primary">Add</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
      );
    };

export default AddProjectForm;