import './CSS/Header.css'
import React from 'react';
import { Link } from 'react-router-dom'


 function Header() {

        return (
            <div className="flex-container">
            <h1 className='logo'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyBMwlQv6QqW9EpWKcDRERI2hcXX8_33bvftejVbzMPvtY6Yw&s"></img> </h1>
              <ul className="navigation">
                <li><button Link to={'/login'}>Login</button></li>
                <li><button href="/profile">Profile</button></li>
                <li><button href="/register">Sign Up</button></li>
              </ul>
            </div>
        )
}


export default Header