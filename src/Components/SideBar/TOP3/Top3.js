import React from 'react'
import classes from "./Top3.module.css"

function Top3(props) {
    return (
        <div>
                <div className={classes.Section1Stat}>
                    <p>{props.country}</p>
                    <p>{props.confirmed}</p>
                    <p>{props.deaths}</p>
                    <p>{props.recovered}</p>
                </div> 
        </div>
    )
}

export default Top3