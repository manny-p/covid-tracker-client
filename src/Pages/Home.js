import React, { Component } from 'react';
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar/SideBar"
import Heading from '../Heading/Heading';
import Map from "../Map"
import CovidModel from "../models/covid"
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';
// import Nav from 'react-bootstrap/esm/Nav';



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
          <SideBar stats={this.state.covid}/>
          <SpacingGrid/> 
          </Container>
          <Heading />
          <Footer />
          </div>
      )
    }
}

export default Home;