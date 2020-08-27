import React, { Component, useState } from 'react'
import './auth.css';

const styles = {
    backgroundColor: "black",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

}
 class Register extends Component {

    render() {

      return (
        <div style={styles}>
            <div className='register'>
            <form className="register-form">
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <button>login</button>
              <p >Not registered? <a href="#">Create an account</a></p>
            </form>
               </div>
</div>
        )
    }
}

export default Register
