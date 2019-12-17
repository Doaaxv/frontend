
import React ,{ useState } from 'react';
import { useFormik } from 'formik';
import { Col, Row, Form, Container, Button } from 'react-bootstrap';
import { login } from './functionAuth'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Required"
  }

  return errors;
};

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [username,setUsername] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: async (values) => {
      login(values)
      .then(res =>{
        if(res.data=="1"){
          alert("password is incorrect")
        }else if(res.data=="2"){
          alert("email not found")
        }else{
          localStorage.setItem('usertoken' , res.data)
          alert("login successfully")
          console.log(jwt_decode(localStorage.usertoken).user.username)
          setUsername(jwt_decode(localStorage.usertoken).user.username)
          
          setShow(!show)
        } 
        })
      .catch(err=>console.log(err))
    },
  });
  return (
    <MDBContainer>
      {show && <Redirect to={{ pathname: `/Portfolio/${username}` }} />}
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={formik.handleSubmit}>  
            <MDBInput
              label="Email"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <MDBInput
              label="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <MDBBtn type="submit" color="primary">Login</MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;
