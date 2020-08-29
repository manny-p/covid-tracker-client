import './CSS/Header.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { viruses } from '@fortawesome/free-solid-svg-icons'

 function Header() {
        
        return (
            <div className="flex-container">
            <a href="/" className='logo'>
            <i class="fad fa-viruses fa-4x"></i>
            </a>
              <ul className="navigation">
              <li><Link to={'/login'}>Login</Link></li>
              <li><Link to={'/register'}>Sign Up</Link></li>
              {/* <li><Link to={'/profile'}>Profile</Link></li> */}
              </ul>
            </div>
        )
}


export default Header