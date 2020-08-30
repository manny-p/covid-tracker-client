import React from 'react'
import classes from './SearchInput.module.css'


 function SearchInput(props) {
    return (
        <div>
            <form className={classes.Form} onSubmit={(e) => props.handleSubmit(e)}>
                <input type="text" onChange={(e) => props.handleChange(e)} value={props.country} placeholder="Search" className={classes.Input}/>
               <input type="submit" className={classes.Input}/>
            </form>
            {/* {props.error ? showError() : null} */}
            {props.error ? <p style={{color: "red"}}>Please enter correct country name!</p> : <p></p>}
        </div>
    )
}

export default SearchInput