import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import Footer from "../src/components/Footer/Footer"



ReactDOM.render(
  <Router>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
  
);

