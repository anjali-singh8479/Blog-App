import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<>
<div className='auth'>
<h1>Login</h1>
<form>
<input className='input' type='text' placeholder='Enter the username'></input>
<input  className="input" type='password' placeholder='Enter the password'></input>
<p className='error-p'>This is the error</p>
<button className='button-click'> Login</button>
<span>Don't have a account? <Link to="/register" className='auth-links'>Register</Link></span>
</form>
</div>
</>    
  )
}

export default Login