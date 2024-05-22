import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const[error,seterror]=useState("")
    const[dat,setdata]=useState({
        username:"",
        password:""
    })
    const handlechange=(e)=>{
     setdata((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleclick=async(e)=>{
e.preventDefault()
try{
const res=await axios.post("http://localhost:8800/auth/login",dat)

if(res.data.message=== "Logged In" )
    navigate("/")
seterror(res.data)
console.log(res.data) 
}catch(err){
    return err
}
    }
  return (
<>
<div className='auth'>
<h1>Login</h1>
<form>
<input className='input' type='text' placeholder='Enter the username' name="username" onChange={handlechange}></input>
<input  className="input" type='password' placeholder='Enter the password' name="password" onChange={handlechange}></input>
{error && <p className='error-p'>{error}</p>}
<button className='button-click' onClick={handleclick}> Login</button>
<span>Don't have a account? <Link to="/register" className='auth-links'>Register</Link></span>
</form>
</div>
</>    
  )
}

export default Login