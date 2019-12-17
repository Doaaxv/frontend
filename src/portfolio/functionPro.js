import axios  from "axios"
// Build connection function between frontend and backend

// Register
export const addpro = (newuser)=>{
    console.log("inside addpro")
    
    return axios.post('http://localhost:5000/UserInfoRoutes/create' ,newuser )
}