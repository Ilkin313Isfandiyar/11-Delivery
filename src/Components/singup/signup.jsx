import React from 'react'
import './signup.css'

export default function SignUp() {
  return (
<div class="signup-box">
        <h2>Welcome 11 Delivery</h2>
        <p>Enter your details</p>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <i class="fa-solid fa-user"></i>
                    <input type="email" id="email" placeholder="email" />
            </div>
            <div class="form-group">
                <label for="email">Position</label>
                <i class="fa-solid fa-user"></i>
                    <input type="email" id="email" placeholder="position" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder="Your password" />
             </div>
             <div class="form-group">
                <label for="password">ReWrite Password</label>
                <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder="Your password" />
             </div>
        </form>
        <div>
            <a href="#" class="btn">Sign In</a>
            </div>
            <div>
            </div>
    </div>
  )
}