import React, { Component } from 'react'
import Footer from '../Components/Footer/Footer'
import TableHeading from "../Components/TableHeading/TableHeading"
import TableBody from "../Components/TableBody/TableBody"
import UserSideBar from '../Components/UserSideBar/UserSideBar'

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
            <Footer />
        </div>
    )
}
}

export default Profile