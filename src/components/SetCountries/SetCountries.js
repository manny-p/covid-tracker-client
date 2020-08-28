import React from "react"
import classes from "../SideBar/SideBar.module.css"
// import useGlobalState from "../state"

export default () => {
    return (
        <div className={classes.Section3Title}>
            <p>Country</p>
            <p>Total Cases</p>
            <p className={classes.D}>Deaths</p>
            <p className={classes.R}>Recovered</p>
        </div>
    )
}








