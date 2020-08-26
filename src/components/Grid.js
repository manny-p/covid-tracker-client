import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';
import Map from './/Map/Map'
import SideBar from ".//SideBar/SideBar"

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
            <Map covid={props.covid} center={props.center}/>
              {/* <Paper elevation={20} className={classes.main} variant="elevation"> <MapTest covid={props.covid}/> </Paper> */}
            </Grid>

            {/* <Grid item>
              <Paper elevation={10} className={classes.secondary} variant="elevation"> <SideBar covid={props.covid} /> </Paper>  */}

<<<<<<< HEAD
            <Grid item xl={4} lg={4} md={4} sm={4} xs={11}>
            <SideBar covid={props.covid} countryObject={props.countryObject}/>
=======
            <Grid item  xl={4} lg={4} md={4} sm={4} xs={11}>
            <SideBar covid={props.covid} countryObject={props.countryObject}/> <br />
            
>>>>>>> 81f2555b7ef7708122b210d8dd6c04e8ea98aedb
              {/* <Paper elevation={10} className={classes.secondary} variant="elevation"> <SideBar covid={props.covid}/> </Paper>  */}

            {/* </Grid> */} 
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}
export default SpacingGrid
