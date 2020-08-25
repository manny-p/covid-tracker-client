import React, { Component } from 'react';
import Footer from "../components/Footer/Footer"
import Heading from '../Heading/Heading';
import CovidModel from "../models/covid"
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';
import SearchInput from "../components/SearchInput/SearchInput"


class Home extends Component {
    state = {
        covid: [],
        country: "",
        countryObject: {}
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({country: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        CovidModel.getCountry(this.state.country)
        .then(data => {
            console.log(data)
            this.setState({countryObject: data})
        })
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
        console.log(this.state.covid)
        const styles = {
            backgroundColor: "black", 
            position: "relative", 
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            clear: "both"
        }
      return (
          <div style={styles}>
          <Heading />
          <SearchInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} country={this.state.country}/>
           <Container maxWidth="lg"> 
           <SpacingGrid countryObject={this.state.countryObject} covid={this.state.covid}/> 
            </Container>
          <Footer />    
          </div>
      )
    }
}

export default Home;