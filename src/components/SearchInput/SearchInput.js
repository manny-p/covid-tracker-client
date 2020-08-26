import React, {useState} from 'react'
import classes from './SearchInput.module.css'
import CovidModel from "../../models/covid"

 function SearchInput(props) {
    // const [country, setCountry] = useState()


    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setCountry(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     CovidModel.getCountry(country)
    //     .then(data => {console.log(data)})
    // }

    return (
        <form className={classes.Form} onSubmit={(e) => props.handleSubmit(e)}>
            <input type="text" onChange={(e) => props.handleChange(e)} value={props.country} placeholder="Search" className={classes.Input}/>
            <input type="submit" className={classes.Input}/>
        </form>
    )
}

export default SearchInput