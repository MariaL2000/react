import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup =()=>{
    return(
        <div className='loginsignup'> 
        <div className="loginsignup-container">
            <h1>Sign up</h1>
            <div className="loginsignup-fields">
                <input type="text"  placeholder='Your name'/>
                <input type="text"  placeholder='Email Address'/>
                <input type="text"  placeholder='Password' />
            </div>
            <button> Continue</button>
            <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
            <input type="checkbox"  name='' id=''/>
            <p >By continuing, I agree to terms use & privacy policy</p>
        </div>
            
        </div>
    )
}

export default LoginSignup;