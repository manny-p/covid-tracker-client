import React from 'react'
import classes from "./Heading.module.css"

 function Heading() {
    return (
        <div className={classes.Heading}>
            <h1>Welcome To CoVid Tracker</h1>
            <p>Here you can track all up to date statistic for all countries </p>
        </div>
    )
}
export default Heading