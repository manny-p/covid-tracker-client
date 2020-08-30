import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import UserSpacingGrid from '../components/UserSideBar/ProfileGrid';
// import TableHeading from "../components/TableHeading/TableHeading"
// import TableBody from "../components/TableBody/TableBody"
// import UserSideBar from '../components/UserSideBar/UserSideBar'

class Profile extends Component {
    render() {
        // const styles = {
        //     backgroundColor: "black", 
        //     position: "relative", 
        //     minHeight: "100vh",
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContent: "space-between",
        //     color: "white"
        // }
        // const tableStyle = {
        //     height: "2rem",
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center"
        // }
        const styles = {
            backgroundColor: "#3A4C8C", 
            position: "relative", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",    
        }


    return (
        // <div style={styles}>
        //     <h1 style={{textAlign: "center"}}>Your Saved Data</h1>
        //     <div style={tableStyle}>
        //         <TableHeading />
        //         <TableBody />
        //         <TableBody />
        //         <TableBody />
        //         <TableBody />
        //         <TableBody />
        //     </div>
        //     <UserSideBar />
        // </div>
        <div style={styles}>
        <Container width="100%" fixed disableGutters={true}> 
           <UserSpacingGrid /> 
           </Container>
        </div>
    )
}
}

export default Profile