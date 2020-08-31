import React from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import Footer from "./components/Footer/Footer"
<<<<<<< HEAD
import ContextProvider from './store'
=======

require('dotenv').config()

>>>>>>> b4c38670da32caf76b04f45b1447992b61ea7b49

function App() {
  return (
    <ContextProvider>
    <div>
    <Header/>
    <Routes/>
    <Footer/> 
    </div>
    </ContextProvider>

  );
}

export default App
