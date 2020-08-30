import React from 'react'
import { Link } from 'react-router-dom'
import CountriesList from '../SetCountries/CountriesList'
import SaveCountry from '../SetCountries/SaveCountry'
import classes from "./SideBar.module.css"
import Top3 from "./TOP3/Top3"


 function SideBar(props) {
     // const [show, setShow] = useState(false)
     // const [countries, setCountries] = useState([])
     const info = props.covid.filter(i => {
        return i.cases > 1000000
     }).map(i => {
         return (<Top3
         country={i.country}
         cases={i.cases}
         deaths={i.deaths}
         recovered={i.recovered}
         />)
     })

    //  const countriesList = () => {
    //      setShow(!show)
    //      let list = []
    //      list.push(props.countryObject)
    //      setCountries(list)
    //      console.log(props.countryObject)
    //      console.log(countries)
    // }

    // useEffect(() => {
    //     countriesList()
    // }, [])
    // const isShown = () => {
    //
    // }



    const country = props.countryObject.country ? (<h3>{props.countryObject.country}</h3>) : "Please Search Your Country"


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
                <h3>{country}</h3>
                {/*<button onClick={countriesList} className={classes.Button}>Save</button>*/}
                <SaveCountry country={country}/>
                <div className={classes.Container}>
                <div className={classes.Section2Title}>
                    <p>Total Cases</p>
                    <p className={classes.D}>Deaths</p>
                    <p className={classes.R}>Recovered</p>
                </div>
                <div className={classes.Section2Stat}>
                    <p>{props.countryObject.cases}</p>
                    <p>{props.countryObject.deaths}</p>
                    <p>{props.countryObject.recovered}</p>
                </div>
                </div>
            </div>
            <div className={classes.Section3}>
                <h1>Track Your Countries</h1>
                <CountriesList covid={props.covid}/>
            </div>
            <Link className={classes.Link} to='/auth'>Please Sign Up To Add a Country</Link>
        </div>
    )
}
export default SideBar
