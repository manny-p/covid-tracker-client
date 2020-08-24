import React from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import { withRouter}  from 'react-router-dom'; 


function App() {
  return (
    <div>
    <Header/>

      <Routes/>
    </div>

  );
}

export default App
