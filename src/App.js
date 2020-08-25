
import React from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import Footer from "./components/Footer/Footer"
import { withRouter}  from 'react-router-dom'; 


function App() {
  return (
    <div>
    <Header/>
      <Routes/>
      <Footer />
    </div>

  );
}

export default App
