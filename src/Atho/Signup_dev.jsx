import React from 'react';
import { useFormik } from 'formik';
import { register } from './functionAuth'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length > 20) {
    errors.lastname = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Required"
  }

  if (!values.cpassword) {
    errors.cpassword = "Required"
  } else {
    if (values.cpassword !== values.password) {
      errors.cpassword = "password doesn't match"
    }
  }

  if (!values.username) {
    errors.username = "Required"
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cpassword: '',
      username: '',
      role:1
    },
    validate,
    onSubmit: async (values) => {
      register(values)
        .then(res => {
          //1 means email is in use
          if(res.data=="1"){
            alert("Email is already in use")
          }else if(res.data=="0"){
            alert("username is already in use")
          }else if(res.data=="3"){
            alert("User registered!")
          }
        }
        )
        .catch(err => console.log(err))
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={formik.handleSubmit}>
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

            <MDBInput
              label="Confirm password"
              id="cpassword"
              name="cpassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpassword}
            />
            {formik.touched.cpassword && formik.errors.cpassword ? (
              <div>{formik.errors.cpassword}</div>
            ) : null}

            <MDBBtn type="submit" color="primary">Register</MDBBtn>
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignupForm;