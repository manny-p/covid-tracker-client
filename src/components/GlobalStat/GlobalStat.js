import React from 'react'
import classes from "./GlobalStat.module.css"
import NumberFormat from 'react-number-format'
// import Ticker from "react-ticker"

function GlobalStat(props) {
    console.log(props.stat)
    const stats = props.stat.map(el => (
        <div className={classes.tickerItem}>
            <h4>{el.country}</h4>
            <p><span>Today Cases: </span><NumberFormat value={el.todayCases} displayType={'text'} thousandSeparator={true} /></p>
        </div>
    ))
    return (
        <div className={classes.tickerWrap}>
        <div className={classes.ticker}>
          {stats}
        </div>
        </div>  

        // <>
        // {props.stat !== 0 ? <Ticker  offset="run-in" speed={10}>
        //     {() => (
        //         <div className={classes.GlobalStat}>
        //             <div className={classes.Container}>
        //             {stats}
        //             </div>
                    
        //         </div>
        //     )}
        // </Ticker> : "loading..."} 
        // </>
    )
}

export default GlobalStat
