import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from "./LeftSideBars.module.css"
import NumberFormat from 'react-number-format'



function LeftSideBarsTest(props) {
    console.log(props.global)
    const cases = props.global
    // const deaths = props.global.deaths
    // const recovered = props.global.recovered
    let style = {
        textTransform: "capitalize"
    }

    switch(props.type) {
        case "recovered" : 
            style.color = "#519839"
            break;
        case "deaths" :
            style.color = "#A3000B"
            break;
        default :
            style.color = "#474E85"
    }
    
   
    
return (
            <div className={classes.Categories}>
                <div onMouseOver={() => props.handleMouseHover(props.type) } >
                    <div className={classes.CatagoryListItem1} >
                        <div className={classes.Text1} >
                            <h1 style={style}>{props.type}</h1>
                            <NumberFormat style={style} value={cases} displayType={'text'} thousandSeparator={true} />
                        </div>
                    </div>
            </div>
        </div>         
    )
}

export default LeftSideBarsTest