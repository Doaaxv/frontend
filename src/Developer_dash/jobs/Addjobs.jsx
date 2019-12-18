import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap";

export default class Addjobs extends Component {
    render() {
        return (
            <div>
                <h1>Add Jobs </h1>
            </div>
        )
    }
}
// <MDBContainer>
// <MDBRow>
//   <MDBCol md="6">
//     <form onSubmit={formik.handleSubmit}>  
//       <MDBInput
//         label="Title"
//         id="title"
//         name="title"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.title}
//       />
//       {formik.touched.title && formik.errors.title ? (
//         <div>{formik.errors.title}</div>
//       ) : null}
//       <MDBInput
//         label="Description"
//         id="description"
//         name="description"
//         type="textarea"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.description}
//       />
//       {formik.touched.description && formik.errors.description ? (
//         <div>{formik.errors.description}</div>
//       ) : null}

//       <MDBInput
//         label="Image"
//         id="image"
//         name="image"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.image}
//       />
//       {formik.touched.image && formik.errors.image ? (
//         <div>{formik.errors.image}</div>
//       ) : null}

//       <MDBInput
//         label="Github"
//         id="github"
//         name="github"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.github}
//       />
//       {formik.touched.github && formik.errors.github ? (
//         <div>{formik.errors.github}</div>
//       ) : null}
//       <MDBBtn type="submit" color="primary">Add</MDBBtn>
//     </form>
//   </MDBCol>
// </MDBRow>
// </MDBContainer>