import React, { Component } from 'react';
import Footer from "../Components/Footer/Footer"
import SideBar from "../Components/SideBar/SideBar"
import Heading from '../Heading/Heading';
import Map from "../Map"
import CovidModel from "../models/covid"



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
          <SideBar stats={this.state.covid} isHome={true}/>
          <Map />
          <Heading />
          <Footer />
          </div>
      )
    }
}

export default Home;