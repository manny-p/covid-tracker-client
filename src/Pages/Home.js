import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import CovidModel from "../models/covid"
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';
import SearchInput from "../components/SearchInput/SearchInput"
import GlobalStat from "../components/GlobalStat/GlobalStat"


class Home extends Component {
    state = {
        covid: [],
        country: "",
        countryObject: {},
        global: []
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
            console.log('line 20 Home.js')
            console.log(data)
            
        })
        CovidModel.global().then(data => {
            this.setState({global: data})
            console.log('line 20 Home.js')
            console.log(data)
        })    
    }
    

    render() {
        console.log(this.state.covid)
        const styles = {
            backgroundColor: "#16161A", 
            position: "relative", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            
        }

      return (
        <div style={styles}>
          <Heading />
          <GlobalStat stat={this.state.covid}/>
          <SearchInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} country={this.state.country}/>
           <Container maxWidth="xl" fixed disableGutters={true}> 
           <SpacingGrid countryObject={this.state.countryObject} covid={this.state.covid}/> 
            </Container>
                </div> )
    }
}

export default Home;