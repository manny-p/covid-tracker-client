import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import TableHeading from "../components/TableHeading/TableHeading"
import TableBody from "../components/TableBody/TableBody"
import UserSideBar from '../components/UserSideBar/UserSideBar'
import SpacingGrid from '../components/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';

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
        //     height: "20rem",
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center"
        // }
        

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
        <Grid className='root'>
        <Grid item lg={12} xs={12}>
          <Grid container={true}  align-content="center" flex-wrap="wrap" flex-direction="column-reverse" spacing={2} >
              <Grid item xl={8} lg={8} md={8} sm={8} xs={11}>
              {/* <div style={tableStyle}> */}
                {/* <TableHeading />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody />
                <TableBody /> */}
             {/* </div> */}
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={4} xs={11}>
              {/* <UserSideBar /> */}
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    )

}
}

export default Profile