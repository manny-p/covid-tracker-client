import React, { Component } from 'react';
import Footer from "../components/Footer/Footer"
import Heading from '../Heading/Heading';
import CovidModel from "../models/covid"
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';


class Home extends Component {
    state = {
        covid: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        CovidModel.all().then(data => {
            this.setState({covid: data})
            console.log(data)
        })
    }

    render() {
        const styles = {
            backgroundColor: "black", 
            position: "relative", 
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            clear: "both"
        }
      return (
          <div style={styles}>
           <Container maxWidth="lg"> 
           <SpacingGrid stats={this.state.covid}/> 
            </Container>

        
          <Heading />
          <Footer />
        
      
          </div>
      )
    }
}

export default Home;