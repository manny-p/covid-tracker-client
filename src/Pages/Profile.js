import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import TableHeading from "../components/TableHeading/TableHeading"
import TableBody from "../components/TableBody/TableBody"
import UserSideBar from '../components/UserSideBar/UserSideBar'
import SpacingGrid from '../components/Grid';
import Container from '@material-ui/core/Container';

class Profile extends Component {
    render() {
        const styles = {
            backgroundColor: "black", 
            position: "relative", 
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "white"
        }
        const tableStyle = {
            height: "20rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        

    return (
        <div style={styles}>
            <h1 style={{textAlign: "center"}}>Your Saved Data</h1>
            <div style={tableStyle}>
                <TableHeading />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
            </div>
            <UserSideBar />
        </div>
    )
}
}

export default Profile