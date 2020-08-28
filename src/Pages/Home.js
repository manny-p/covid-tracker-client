import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import CovidModel from "../models/covid"
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';
import GlobalStat from "../components/GlobalStat/GlobalStat"
import Modal from "../components/SideBar/modal/Modal"



class Home extends Component {
    state = {
        covid: [],
        country: "",
        countryObject: {},
        center: {},
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
        this.setState({countryObject: data, center: {lat: parseInt(data.countryInfo.lat), lng: parseInt(data.countryInfo.long)}})
        })
    }

    componentDidMount() {
        this.fetchData()
        this.fetchNewData()
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
    

    render() {
        console.log(this.state.covid)
        const styles = {
            backgroundColor: "#3A4C8C", 
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
           <SpacingGrid countryObject={this.state.countryObject} covid={this.state.covid} center={this.state.center} global={this.state.global} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> 
           </Container>
           <GlobalStat stat={this.state.covid}/>
        </div> 
        )
    }
}

export default Home;