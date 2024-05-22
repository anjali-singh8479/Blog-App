import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    const navigate=useNavigate()
    const [error,seterr]=useState("")
    const[data,setdata]=useState({
        username:"",
        password:"",
        email:"",
        img:""
    })
    const handleclick=async(e)=>{
        e.preventDefault()
try{
const res=await axios.post("http://localhost:8800/auth/register",data)
console.log(res);
if(res.data==="registered")
    navigate("/login")
seterr(res.data)
}catch(err){
    return err
}
    }
    const handlechange=async(e)=>{
setdata((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
<>
<div className='auth'>
<h1>Register</h1>
<form>
<input className='input' type='text' placeholder='Enter the username' name="username" onChange={handlechange}></input>
<input className='input' type='email' placeholder='Enter the email'name="email" onChange={handlechange}></input>
<input  className="input" type='password' placeholder='Enter the password' name="email" onChange={handlechange}></input>
<input className='input' type='file' placeholder='Select profile picture' name="img" onChange={handlechange}></input>
{error && <p className='error-p'>{error}</p>}
<button className='button-click' onClick={handleclick}> register</button>
<span>Do you have a account? <Link to="/login" className='auth-links'>Login</Link></span>
</form>
</div>
</>    
  )
}

export default Register