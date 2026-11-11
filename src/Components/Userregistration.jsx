import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../API/apiService';

function Userregistration() {

    const navigation=useNavigate()

    const [userData,setUserData]=useState({
        name:"",email:"",password:""
    })

    const handleRegisterUser=async()=>{
        const{name,email,password}=userData
        if(!name || !email || !password){
            toast.error("Please fill the form...")
        }else{
            const response=await registerUser(userData)
            if(response.status==201){
                toast.success(`${response.data.message}`)
                setTimeout(()=>{
                    navigation('/')
                },2000)
            }
        }
    }

  return (
    <div>
        <div className='p-3 bg-slate-200 h-190'>
            <p className='font-medium text-2xl text-red-600 text-center'>REGISTER</p>
            <div className='flex justify-center items-center h-150'>
                <div className='my-5 shadow p-3'>
                    <div className='my-2'>
                        <input onChange={(e)=>setUserData({...userData,name:e.target.value})} className='border px-3 py-1 border-gray-400 rounded w-full hover:scale-110 duration-200' type="text" placeholder='Enter Name' />
                    </div>
                    <div className='my-2'>
                        <input onChange={(e)=>setUserData({...userData,email:e.target.value})} className='border px-3 py-1 border-gray-400 rounded w-full hover:scale-110 duration-200' type="text" placeholder='Enter Email' />
                    </div>
                    <div className='my-2'>
                        <input onChange={(e)=>setUserData({...userData,password:e.target.value})} className='border px-3 py-1 border-gray-400 rounded w-full hover:scale-110 duration-200' type="password" placeholder='Enter Password' />
                    </div>
                     <div className='flex justify-end'>
                        <div className='flex gap-10 items-center'>
                            <p>Are you an existing User ? <Link to={'/'} className='py-1 text-red-600 rounded font-medium hover:scale-110 duration-200'>Login</Link> </p>
                            <button onClick={handleRegisterUser} className='px-3 py-1 bg-green-600 text-white font-medium rounded hover:scale-110 duration-200'>REGISTER</button></div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userregistration