import React, { Component } from 'react'
import {localhost} from "../../GlobalVars"
import {useFormik} from "formik"
import axios from "axios"
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
const AddJobForm = () => {
    const formik = useFormik({
        initialValues: {
          title: '',
          description:'',
          budget:'',
          technologies:'',
          deadline:'',
          status:'',
          requests:[],
          emp_id:""
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
        <div>
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
                  label="budget"
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
                 <MDBInput
                  label="status"
                  id="status"
                  name="status"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status} />
                {formik.touched.status && formik.errors.status ? (
                  <div>{formik.errors.status} </div>
                ): null}
                     <MDBInput
                  label="requests"
                  id="requests"
                  name="requests"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.requests} />
                {formik.touched.requests && formik.errors.requests ? (
                  <div>{formik.errors.requests} </div>
                ): null}
                     <MDBInput
                  label="status"
                  id="status"
                  name="status"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status} />
                {formik.touched.status && formik.errors.status ? (
                  <div>{formik.errors.status} </div>
                ): null}
                <MDBBtn type="submit" color="primary">Add</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
      );
    };

export default AddJobForm;
