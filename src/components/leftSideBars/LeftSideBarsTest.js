import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from "./LeftSideBars.module.css"


function LeftSideBarsTest(props) {
    // console.log(props.global)
    const cases = props.global
    // const deaths = props.global.deaths
    // const recovered = props.global.recovered
    
return (
            <div className={classes.Categories}>
                <div onMouseOver={() => props.handleMouseHover(props.type) } >
                    <p className={classes.CatagoryListItem1} >
                        <div className={classes.Text1} >
                            <h1>{props.type}</h1>
                            {cases} 
                        </div>
                    </p>
            </div>
        </div>         
    )
}

export default LeftSideBarsTest