import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';
import UserSideBar from "./UserSideBar"
import TableHeading from "../TableHeading/TableHeading"
import TableBody from "../TableBody/TableBody"



function UserSpacingGrid(props) {
   
  return (
    <Grid className='root'>
      <Grid item lg={12} xs={12}>
        <Grid container={true}  align-content="center" flex-wrap="wrap" flex-direction="column-reverse" spacing={2} >
            <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                <div>
                    <TableHeading />
                    <TableBody />
                    <TableBody />
                    <TableBody />
                    <TableBody />
                    <TableBody />
                </div>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <UserSideBar />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={11}>
            
            </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}
export default UserSpacingGrid
