import React, { Component } from 'react'
import axios from 'axios'
import { localhost } from '../../GlobalVars'
import { useFormik } from 'formik';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
export default class EditProject extends Component {
    render() {
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
                console.log(values)
              axios.putt(`${localhost}/project/`,values)
              .then(result=>console.log(result))
              .catch(err=>console.log(err))
            },
          });
        return (
            <div>
                
            </div>
        )
    }
}
