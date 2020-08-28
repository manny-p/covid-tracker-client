import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core/';
import Map from './/Map/Map'
import SideBar from ".//SideBar/SideBar"
import LeftSideBars from "./leftSideBars/LeftSideBars"
import SearchInput from "../components/SearchInput/SearchInput"
import LeftSideBarsTest from "./leftSideBars/LeftSideBarsTest"
import classes from "./leftSideBars/LeftSideBars.module.css" 


function SpacingGrid(props) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  }

  return (
    <Grid className='root'>
      <Grid item lg={12} xs={12}>
        <Grid container={true}  align-content="center" flex-wrap="wrap" flex-direction="column-reverse" spacing={2} >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div style={styles}>
            <SearchInput handleChange={props.handleChange} handleSubmit={props.handleSubmit} country={props.country}/>
            </div>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
              <Map 
              covid={props.covid} 
              center={props.center} 
              continent={props.continent}   
              type={props.type}
              hover={props.hover}
              />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <SideBar covid={props.covid} countryObject={props.countryObject} continent={props.continent}/>
        </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={11}>
            <div className={classes.Categories} >
              <LeftSideBarsTest 
              className={classes.CatagoryListItem1}
              type="cases" 
              global={props.global.cases} 
              handleMouseHover={props.handleMouseHover}
              />
              <LeftSideBarsTest 
              className={classes.CatagoryListItem1}
              type="deaths" 
              global={props.global.deaths} 
              handleMouseHover={props.handleMouseHover}
              />
              <LeftSideBarsTest 
              
              className={classes.CatagoryListItem3}
              type="recovered" 
              global={props.global.recovered} 
              handleMouseHover={props.handleMouseHover}
              />
              </div>
            </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
}
export default SpacingGrid
