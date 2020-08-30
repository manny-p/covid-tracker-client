import React from 'react';
import Routes from './config/routes'
import Header from './components/Header'
import Footer from "./components/Footer/Footer"
// import { withRouter}  from 'react-router-dom';
import ContextProvider from './store'

function App() {
  return (
    <ContextProvider>
    <div>
    <Header/>
    <Routes/>
    <Footer />
    </div>
    </ContextProvider>

  );
}

export default App
