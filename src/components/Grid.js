import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import {Grid, Paper} from './node_modules/@material-ui/core/';
import Map from './Map'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  main: {
    margin: 20,
    height: 700,
    width: 650,
    textAlign : 'center',
    backgroundColor: 'purple',
  },
  secondary: {
    margin: 20,
    height: 700,
    width: 350,
    textAlign : 'center',
    backgroundColor: 'coral',
    
  }
}))

function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid className='root'>
      <Grid item xs={12}>
        <Grid container justify="center" >
            <Grid item>
              <Paper elevation={20} className={classes.main} variant="elevation"> <Map/> </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.secondary} variant="elevation"> BorderBox Placeholder </Paper> 
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SpacingGrid