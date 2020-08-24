import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';
import Map from '../components/Map'
import SideBar from "../components/SideBar/SideBar"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  main: {
    margin: 20,
    height: 700,
    width: 650,
    textAlign : 'center',
    backgroundColor: 'grey',
  },
  secondary: {
    margin: 20,
    height: 700,
    width: 350,
    textAlign : 'center',
    backgroundColor: 'grey',
    
  }
}))

function SpacingGrid(props) {
  const classes = useStyles();

  return (
    <Grid className='root'>
      <Grid item xs={17}>
        <Grid container justify="center" >
            <Grid item>
              <Paper elevation={20} className={classes.main} variant="elevation"> <Map/> </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.secondary} variant="elevation">  </Paper> 
              <SideBar stats={props.stats}/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SpacingGrid