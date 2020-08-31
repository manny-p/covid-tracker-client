import React from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import Footer from "./components/Footer/Footer"
import ContextProvider from './store'
require('dotenv').config()



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
