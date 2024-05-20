import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
<>
<div className='auth'>
<h1>Register</h1>
<form>
<input className='input' type='text' placeholder='Enter the username'></input>
<input className='input' type='email' placeholder='Enter the email'></input>
<input  className="input" type='password' placeholder='Enter the password'></input>
<p className='error-p'>This is the error</p>
<button className='button-click'> Login</button>
<span>Do you have a account? <Link to="/login" className='auth-links'>Login</Link></span>
</form>
</div>
</>    
  )
}

export default Register