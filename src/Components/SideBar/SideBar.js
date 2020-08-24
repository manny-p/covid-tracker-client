import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./SideBar.module.css"
import Top3 from "./TOP3/Top3"

 function SideBar(props) {
    //  const info = props.filter(i => {
    //     return i.updated > 650000
    //  }).map(i => {
    //      return (<Top3 
    //      country={i.country} 
    //      confirmed={i.updated} 
    //      deaths={i.deaths}
    //      recovered={i.recovered} 
    //      />)
    //  })
    //   console.log(info)
    props.covid.map(covid => {
        console.log(covid)
    })
    // console.log(props.countries)
    // for (let i = 0; i <= props.countries.length; i++) {
    //     console.log(props.countries[i])
    // }
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
             {/* {info} */}
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