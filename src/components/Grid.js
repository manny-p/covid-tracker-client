import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 6,
  },
  paperleft: {
    margin: 20,
    height: 700,
    width: 650,
    textAlign : 'center',
    backgroundColor: 'purple',
  },
  paperright: {
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
              <Paper className={classes.paperleft} > MAP placeholder</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paperright} > BorderBox Placeholder </Paper> 
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
