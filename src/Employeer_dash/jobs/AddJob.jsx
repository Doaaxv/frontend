import React, { Component } from 'react'
import {localhost} from "../../GlobalVars"
import {useFormik} from "formik"
import axios from "axios"
import jwt_decode from 'jwt-decode'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Form, Nav } from "react-bootstrap";

const validate = values => {
  console.log("i'm hereee")
    const errors = {};
    if (!values.title) {
      errors.email = 'Required';
    }
    if (!values.description) {
      errors.password = "Required"
    }
    return errors;
  };
const AddJobForm = () => {
  const checkboxclick = (e) =>{
    console.log("checked")
    console.log(e.target.id)
      let temp = formik.values.technologies.slice()
      let fIndex = temp.indexOf(e.target.id)
      if (fIndex < 0) {
          temp.push(e.target.id)
      } else {
           temp.splice(fIndex, 1)
      }
      formik.values.technologies = temp
  } 
    const formik = useFormik({
        initialValues: {
          title: '',
          description:'',
          budget:'',
          technologies:[],
          deadline:'',
          requests:[],
          // emp_id: jwt_decode(localStorage.usertoken).user._id
        },
        validate,
        onSubmit: async (values) => {
          axios.post(`${localhost}/job/create`,values)
          .then(result=>{console.log("create job")
            console.log(result)})
          .catch(err=>console.log(err))
        },
      });
      return (
        <div style={{background:"pink"}}>
       <br/>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit = {formik.handleSubmit}>  
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
                  label="Budget"
                  id="budget"
                  name="budget"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.budget}
                />
                {formik.touched.budget && formik.errors.budget ? (
                  <div>{formik.errors.budget}</div>
                ) : null}
                <MDBInput
                  label="technologies"
                  id="technologies"
                  name="technologies"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.technologies} />
                {formik.touched.technologies && formik.errors.technologies ? (
                  <div>{formik.errors.technologies}</div>
                ) : null}
                 <MDBInput
                  label="deadline"
                  id="deadline"
                  name="deadline"
                  type="Date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.deadline} />
                {formik.touched.deadline && formik.errors.deadline ? (
                  <div>{formik.errors.deadline} </div>
                ): null}
                <Form.Check label="Ruby" type="checkbox" id="Ruby"  onChange = {checkboxclick}/>
                <input label="javascript" type="checkbox" id="javascript" onChange = {checkboxclick}/>
                <input label="python" type="checkbox" id="python" onChange = {checkboxclick}/>
                <br/>
                <MDBBtn type="submit" color="primary">Add</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
      );
    };

export default AddJobForm;
