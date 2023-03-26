import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <div className='main-container-login'>
<div class="login-box">
        <h2>Welcome back</h2>
        <p>Enter your details</p>

        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <i class="fa-solid fa-user"></i>
                    <input type="email" id="email" placeholder="email" />
            </div>
             <div class="form-group">
                <label for="password">Password</label>
                <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder="Your password" />
             </div>
        </form>
        <div>
            <a href="#" class="btn">Log In</a>
            </div>
            <div>
            <a href="#" class="forgot" className='forgotPass'>
                Forgot Your Password?
            </a>
            <Link to='/signin'><button className='signinBtn'>Sign In</button></Link>
            </div>
    </div>
    </div>
  )
}
