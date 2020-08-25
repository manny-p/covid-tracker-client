import React, { Component, useState } from 'react'
import './auth.css';
import { withRouter}  from 'react-router-dom'; 

 class Register extends Component {
    

    render() {
        return (
            <div className='register'>
            <form className="register-form">
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <button>login</button>
              <p >Not registered? <a href="#">Create an account</a></p>
            </form>
               </div>

        )
    }
}

export default Register
