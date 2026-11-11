import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { loginUserAPI } from '../API/apiService';

function Userlogin() {

    const navigate=useNavigate()

    const [userData,setUserData]=useState({
            email:"",password:""
        })
        console.log(userData);

        const handleLogin=async()=>{
            const{email,password}=userData
            if(!email || !password){
                toast.error("Please fill the form")
            }else{
                const response=await loginUserAPI(userData)
                console.log(response);
                
                if(response.status==200){
                    const userData=response.data.data
                    const token=response.data.token
                    localStorage.setItem("user",JSON.stringify(userData))
                    localStorage.setItem("token",token)
                    toast.success("Login Success")
                    setTimeout(()=>{
                        navigate('/dashboard')
                    },2000)
                }else{
                    toast.error("Unauthorized user")
                }
            }
        }

  return (
    <div>
        <div className='py-3 bg-slate-200 h-200'>
            <p className='font-medium text-2xl text-red-600 text-center'>LOGIN</p>
            <div className='flex justify-center items-center h-150'>
                <div className='my-5 shadow p-3'>
                    <div className='my-2'>
                        <input onChange={(e)=>setUserData({...userData,email:e.target.value})} className='border px-3 py-1 rounded w-full hover:scale-110 border-gray-400 duration-200' type="text" placeholder='Enter Email' />
                    </div>
                    <div className='my-2'>
                        <input onChange={(e)=>setUserData({...userData,password:e.target.value})} className='border px-3 py-1 rounded w-full hover:scale-110 border-gray-400 duration-200' type="password" placeholder='Enter Password' />
                    </div>
                    <div className='flex justify-end'>
                        <div className='flex gap-10 items-center'>
                            <p className='font-medium'>Are you a new User <Link to={'/reg'} className='text-blue-600 py-1  rounded font-medium hover:scale-110 duration-200'>Register</Link> </p>
                            <button onClick={handleLogin} className='px-3 py-1 bg-green-600 text-white font-medium rounded hover:scale-110 duration-200'>LOGIN</button></div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userlogin