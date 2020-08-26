import React from 'react'
import classes from "./GlobalStat.module.css"
import Ticker from "react-ticker"

function GlobalStat(props) {
    console.log(props.stat)
    const stats = props.stat.map(el => (
        <div className={classes.StatContainer}>
            <h4>{el.country}</h4>
            <p>(Tests)</p>
            <p>{el.tests}</p>
        </div>
    ))
    return (
        <div className={classes.GlobalStat}>
            <div className={classes.Container}>
            {stats}
            </div>
        </div>
    )
}

export default GlobalStat