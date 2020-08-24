import React from './node_modules/react'
import { Link } from './node_modules/react-router-dom'
import classes from "./TableHeading.module.css"

function TableHeading() {
return (
        <div className={classes.TableHeading}>
                <p>Country</p>
                <p>Total Cases</p>
                <p className={classes.D}>Deaths</p>
                <p className={classes.R}>Recovered</p>
        </div>
    )
}


export default TableHeading