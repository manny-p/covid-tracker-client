import React from 'react'
import classes from "./Top3.module.css"
import NumberFormat from 'react-number-format'


function Top3(props) {
    return (
        <div>
                <div className={classes.Section1Stat}>
                    <p>{props.country}</p>
                    <NumberFormat value={props.cases} displayType={'text'} thousandSeparator={true} />
                    <NumberFormat value={props.deaths} displayType={'text'} thousandSeparator={true} />
                    <NumberFormat value={props.recovered} displayType={'text'} thousandSeparator={true} />
                </div> 
        </div>
    )
}

export default Top3