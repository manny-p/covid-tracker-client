import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./SideBar.module.css"
import Top3 from "./TOP3/Top3"
// {
//     country: i.country,
//     confirmed: i.stats.confirmed,
//     deaths: i.stats.deaths,
//     recovered: i.stats.recovered
// }
 function SideBar(props) {
     const info = props.stats.filter(i => {
        return i.stats.confirmed > 650000
     }).map(i => {
         return (<Top3 
         country={i.country} 
         confirmed={i.stats.confirmed} 
         deaths={i.stats.deaths}
         recovered={i.stats.recovered} 
         />)
     })
      console.log(info)

    return (
        <div className={classes.SideBar}>
            <div className={classes.Section1}>
            <h1>Top 3 Countries</h1>
            <div className={classes.Section1Title}>
                <p>Country</p>
                <p>Total Cases</p>
                <p className={classes.D}>Deaths</p>
                <p className={classes.R}>Recovered</p>
            </div>
             {info}
            </div>
            <div className={classes.Section2}>
            <h1>Search Output</h1>
                <h3>USA</h3>
                <div className={classes.Container}>
                <div className={classes.Section2Title}>
                    <p>Total Cases</p>
                    <p className={classes.D}>Deaths</p>
                    <p className={classes.R}>Recovered</p>
                </div>
                <div className={classes.Section2Stat}>
                    <p>5,000,000</p>
                    <p>300,000</p>
                    <p>2,000,000</p>
                </div>
                </div>
            </div>
            <div className={classes.Section3}>
            <h1>Track Your Countries</h1>
                <div className={classes.Section3Title}>
                    <p>Country</p>
                    <p>Total Cases</p>
                    <p className={classes.D}>Deaths</p>
                    <p className={classes.R}>Recovered</p>
                </div>
            </div>
            <Link className={classes.Link} to='/auth'>Please Sign Up To Add a Country</Link>
        </div>
    )
}
export default SideBar