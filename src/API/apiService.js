import axiosService from "./axiosService"


//Register User
export const registerUser=async(userData)=>{
    return await axiosService("POST",'/reg-user',userData)
}

//Login User
export const loginUserAPI=async(userData)=>{
    return await axiosService("POST",'/login-user',userData)
}