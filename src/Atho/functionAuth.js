import axios  from "axios"
// Build connection function between frontend and backend

// Register
export const register = (newuser)=>{
    console.log("inside funcAuth")
    
    return axios.post('http://localhost:5000/user/register' ,newuser )
}
// login 
export const login = (user)=>{
    return axios.post('http://localhost:5000/user/login' , user)
}