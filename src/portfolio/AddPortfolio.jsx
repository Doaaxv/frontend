import React, { useState } from 'react'
import { useFormik } from 'formik';
import { addpro } from './functionPro'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom"
import login from "../Atho/Login"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { fileUploadHandler, getImagesUrl } from "../ImageUpload/UploadImage"

const validate = values => {
  const errors = {};

  if (!values.education) {
    errors.education = 'Required';
  } 

  if (!values.jobPosition) {
    errors.jobPosition = 'Required';
  }

  if (!values.brandstatment) {
    errors.brandstatment = 'Required';
  } 

  if (!values.github) {
    errors.github = "Required"}
    // else if(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(values.github))
    // {errors.github = 'Invalid url';}
    // else if(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(values.github))
    // {errors.github = 'Invalid url';}
  // }else if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(values.Github)) {
  //   errors.github = 'Invalid url';
  // }

  if (!values.linkdin) {
    errors.linkdin = "Required"
  }
  // else if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(values.linkdin)) {
  //   errors.linkdin = 'Invalid url';
  // }
  
  if (!values.twitter) {
    errors.linkdin = "Required"
  }
  // else if (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(values.twitter)) {
  //   errors.twitter = 'Invalid url';
  // }


  return errors;
};

const AddPortfolio = (props) => {
  const [show, setShow] = useState(false);

// console.log(props.user_id)

  const buttonClick = (event) => {
    if (event.target.files[0]) {
      const img = event.target.files[0];
      formik.values.img = img
    }
  }

  const uploadTheImage = () => {
    fileUploadHandler(formik.values.img)
  }

  const formik = useFormik({
    initialValues: {
      user:"1", //props.user_id,
      education: '',
      img: '',
      jobPosition: '',
      brandstatment: '',
      github: '',
      linkdin: '',
      twitter: ''
    },
    validate,
    onSubmit: async (values) => {
      console.log("ONSUBMIT")
      console.log(values.img)

      

      getImagesUrl(values.img.name)
      .then(url=>{
        values.img = url
        addpro(values)
        .then(r => {
          console.log("ADDD PROOO SUBBB")
          console.log(r)
          setShow(!show)
          alert("Successfully added user's information")
        }
        )
        .catch(err => console.log(err))
      })   
    },
  });
  return (
    <MDBContainer>

      {show && <Redirect to={{ pathname: `/login` }} />}
      {/* {show && <Redirect to={{ pathname: `/Portfolio/${props.username}` ,  state: { data: formik.values }  }} />} */}


      {/* {show == false && <p>show is {show}</p>}
      {show == true && <p>show is {show}</p>} */}
      <p>Developer</p>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={formik.handleSubmit}>
            <MDBInput
              label="education"
              id="education"
              name="education"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education}
            />
            {formik.touched.education && formik.errors.education ? (
              <div>{formik.errors.education}</div>
            ) : null}

            {/* <MDBInput
            label="img"
            id="img"
            name="img"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.img}
          />
          {formik.touched.img && formik.errors.img ? (
            <div>{formik.errors.img}</div>
          ) : null} */}

            <MDBInput
              label="Job position"
              id="jobPosition"
              name="jobPosition"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.jobPosition}
            />
            {formik.touched.jobPosition && formik.errors.jobPosition ? (
              <div>{formik.errors.jobPosition}</div>
            ) : null}

            <MDBInput
              label="Brand statment"
              id="brandstatment"
              name="brandstatment"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brandstatment}
            />
            {formik.touched.brandstatment && formik.errors.brandstatment ? (
              <div>{formik.errors.brandstatment}</div>
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

            <MDBInput
              label="Linkdin"
              id="linkdin"
              name="linkdin"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkdin}
            />
            {formik.touched.linkdin && formik.errors.linkdin ? (
              <div>{formik.errors.linkdin}</div>
            ) : null}


            <MDBInput
              label="twitter"
              id="twitter"
              name="twitter"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twitter}
            />
            {formik.touched.twitter && formik.errors.twitter ? (
              <div>{formik.errors.twitter}</div>
            ) : null}

            <input type="file" name="files" id="" onChange={buttonClick} />
            <br />
            <MDBBtn color="primary" onClick={uploadTheImage}>Upload image</MDBBtn>

            <MDBBtn type="submit" color="primary">Submit</MDBBtn>

            {/* <Button type="submit">Submit</Button> */}
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

export default AddPortfolio;
