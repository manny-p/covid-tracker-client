import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import CovidModel from "../models/covid"
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';
import GlobalStat from "../components/GlobalStat/GlobalStat"
// import LeftSideBars from "../components/leftSideBars/LeftSideBars"

class Home extends Component {
    state = {
        covid: [],
        country: "",
        countryObject: {},
        center: {},
        global: [],
        continent: [],
        stats: 'default',
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({country: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        CovidModel.getCountry(this.state.country)
        .then(data => {
            this.setState({countryObject: data, center: {lat: parseInt(data.countryInfo.lat), lng: parseInt(data.countryInfo.long)}})
        })
    }

    handleMouseHover = (type) => {
        console.log("Hover Target " , type)
        this.setState({stats: type , hover: !null })
    }
    
    componentDidMount() {
        this.fetchData()
        this.fetchNewData()
        this.fetchContinentData()
    }

    fetchData = () => {
        CovidModel.all().then(data => {
            this.setState({covid: data})  
        })   
    }
    fetchNewData = () => {
        CovidModel.global().then(data => {
            this.setState({global: data})
        })   
    }

    fetchContinentData = () => {
        CovidModel.continent().then(data => {
            this.setState({continent: data})
        })   
    }

    render() {
        // console.log(this.state.covid)
        console.log("Line 58 STATS")
        console.log(this.state.stats)
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
           <Container width="100%" fixed disableGutters={true}> 
           <SpacingGrid 
           countryObject={this.state.countryObject} 
           covid={this.state.covid} 
           center={this.state.center} 
           global={this.state.global} 
           continent={this.state.continent} 
           stats={this.state.stats}
           hover={this.state.hover}
           handleChange={this.handleChange} 
           handleSubmit={this.handleSubmit}
           handleMouseHover={this.handleMouseHover}
           /> 
           </Container>
           <GlobalStat stat={this.state.covid}/>
        </div> 
        )
    }
}

export default Home;