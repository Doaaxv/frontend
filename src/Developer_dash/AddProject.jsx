import React, { Component } from 'react'
import { useFormik } from 'formik';
import { Col, Row, Form, Container, Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

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
        //   login(values)
        //   .then(res =>{
        //     if(res.data=="1"){
        //       alert("password is incorrect")
        //     }else if(res.data=="2"){
        //       alert("email not found")
        //     }else{
        //       localStorage.setItem('usertoken' , res.data)
        //       alert("login successfully")
        //     } 
        //     })
        //   .catch(err=>console.log(err))
        },
      });
      return (
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
                  <div>{formik.errors.title}</div>
                ) : null}
                <MDBInput
                  label="Description"
                  id="description"
                  name="description"
                  type="textarea"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div>{formik.errors.description}</div>
                ) : null}

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

                <MDBBtn type="submit" color="primary">Login</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

export default AddProjectForm;