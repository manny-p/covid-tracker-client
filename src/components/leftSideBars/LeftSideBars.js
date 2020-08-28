import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from "./LeftSideBars.module.css"
import NumberFormat from 'react-number-format'


function LeftSideBars(props) {
    // console.log(props.global)
    const cases = props.global.cases
    const deaths = props.global.deaths
    const recovered = props.global.recovered
     
    
return (
    <div>
        <div style={{width: "100%"}}>
            <div style={{width: "100%"}}>
            <div className={classes.Categories}>
                <div className={classes.CatagoryListItem1}>
                        <div className={classes.Text1}>
                            <h1>Global Cases</h1>
                            <NumberFormat value={cases} displayType={'text'} thousandSeparator={true} />
                        </div>
                </div>
                <div className={classes.CatagoryListItem2}>
                        <div className={classes.Text1}>
                            <h1>Global Deaths</h1>
                            <NumberFormat value={deaths} displayType={'text'} thousandSeparator={true} />
                        </div>
                </div>
                <div className={classes.CatagoryListItem3}>
                        <div className={classes.Text1}>
                            <h1>Global Recovered</h1>
                            <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />
                        </div> 
                </div>
                </div>
                </div>
            </div>
        </div>         
    )
}

export default LeftSideBars