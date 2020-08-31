import React from 'react'
import classes from "./Heading.module.css"

 function Heading() {
    return (
        <div className={classes.Heading}>
            <h1>COVID-19 Tracker</h1>
            <p>Track up to date statistics for all countries </p>
        </div>
    )
}
export default Heading
