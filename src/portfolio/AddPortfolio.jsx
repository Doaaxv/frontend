import React , { useState } from 'react'
import { useFormik } from 'formik';
import { addpro } from './functionPro'
import { Redirect } from 'react-router-dom'
import Typical from 'react-typical'
import "../Atho/Atho.css"
import {Link} from "react-router-dom"
import login from "../Atho/Login"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {fileUploadHandler,getImagesUrl} from "../ImageUpload/UploadImage"

  const AddPortfolio = (props) => {
    const [show, setShow] = useState(false);

    console.log(props.user_id)




    const buttonClick = (event)=>{
      if(event.target.files[0]){
        const img = event.target.files[0];
        formik.values.img = img
      }
    }
  const uploadTheImage=()=>{
      fileUploadHandler(formik.values.img)
    }







    const formik = useFormik({
      initialValues: {
        user: props.user_id,
        education:'',
        img: '',
        jobPosition: '',
        brandstatment: '',
        github: '',
        linkdin: '',
        twitter: '',
        role:1
      },
      onSubmit: async (values) => {
        
        
        
        // console.log(values)
  
        addpro(values)
          .then(r => {
            console.log(r)
            // setShow(true)
             setShow(!show)
            // show = true
            //1 means email is in use
            // if(r.data.msg=="1"){
            //   console.log("1")
            //   alert("Email is already in use")
            // }else if(r.data.msg=="0"){
            //   console.log("0")
            //   alert("username is already in use")
            // }else if(r.data.msg=="3"){
            //   console.log("3")
            //   console.log(r.data.user)
            //   props.toggleSub(r.data.user)
            //   //redirect to the add portfolio and send the user id with it
            //   alert("User registered!")
            // }
          }
          )
          .catch(err => console.log(err))
        // alert(JSON.stringify(values, null, 2));
      },
    });
    console.log( formik.values)
  return (
    <div>

<Typical className="deverlperReg"
        steps={['Enter your Informati', 1500, 'Enter your Information ....', 50000]}
        loop={Infinity}
        wrapper="p"
      />

    <MDBContainer className="register">

      {show && <Redirect to={{ pathname: `/login`}}/> }
       {/* {show && <Redirect to={{ pathname: `/Portfolio/${props.username}` ,  state: { data: formik.values }  }} />} */}

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

          <MDBInput
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
          ) : null}

          <MDBInput
            label="jobPosition"
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
            label="brandstatment"
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
            label="github"
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
            label="linkdin"
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

<input type="file" name="files" id="" onChange={buttonClick}/>
            <br/>
            <MDBBtn  color="primary" onClick={uploadTheImage}>Upload image</MDBBtn>
            
          <MDBBtn type="submit" color="primary">
           
            </MDBBtn>
            
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  </div>
  )
};

export default AddPortfolio;
