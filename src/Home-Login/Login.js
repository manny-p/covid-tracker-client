import React, { Component, useState, Fragment } from 'react'
import './auth.css';
import { withRouter}  from 'react-router-dom'; 

 class Login extends Component {
    

    render() {
        return (
        <div>
            <div className='login'>
            <form className="login-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
           </form>
           </div> 
           </div>
        )
    }
}

export default Login
