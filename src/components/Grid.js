import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';
import Map from '../components/Map/Map'
import SideBar from "../components/SideBar/SideBar"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  main: {
    margin: 20,
    height: 700,
    width: 800,
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
      <Grid item lg={12} xs={12}>
        <Grid container={true}  align-content="center" flex-wrap="wrap" flex-direction="column-reverse" spacing={2} >
            <Grid item xl={8} lg={8} md={8} sm={8} xs={11}>
            <Map covid={props.covid}/>
              {/* <Paper elevation={20} className={classes.main} variant="elevation"> <MapTest covid={props.covid}/> </Paper> */}
            </Grid>

            <Grid item>
              <Paper elevation={10} className={classes.secondary} variant="elevation"> <SideBar covid={props.covid} countryObject={props.countryObject}/> </Paper> 

            <Grid item  xl={4} lg={4} md={4} sm={4} xs={11}>
            <SideBar covid={props.covid}/>
              {/* <Paper elevation={10} className={classes.secondary} variant="elevation"> <SideBar covid={props.covid}/> </Paper>  */}

            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SpacingGrid