import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 6,
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

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid >
      <Grid item xs={12}>
        <Grid container justify="center" >
            <Grid item>
              <Paper elevation={20} className={classes.main}> MAP placeholder</Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.secondary} > BorderBox Placeholder </Paper> 
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
