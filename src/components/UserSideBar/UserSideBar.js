import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./UserSideBar.module.css"

function UserSideBar() {
    return (
        <div className={classes.UserSideBar}>
            <div className={classes.Section1}>
            <h1>Your Profile</h1>
            <div className={classes.Container1}>
                <p>Email:</p>
                <p className={classes.Email}>inudsgfksdhkjfhfo@info.com</p>
                <p>Edit</p>{"|"}
                <p>Save</p>
            </div> 
            </div>
            <div className={classes.Section2}>
                <h1>Additional Info</h1>
                <div className={classes.Wrapper}>
                    <p>Name:</p>
                    <div className={classes.Buttons}>
                        <p>Edit</p>{"|"}
                        <p>Save</p>
                    </div>
                </div>
                <div className={classes.Wrapper}>
                    <p>Last Name:</p>
                    <div className={classes.Buttons}>
                        <p>Edit</p>{"|"}
                        <p>Save</p>
                    </div>
                </div>
                <div className={classes.Wrapper}>
                    <p>Phone Number:</p>
                    <div className={classes.Buttons}>
                        <p>Edit</p>{"|"}
                        <p>Save</p>  
                    </div>
                </div>
            </div>
            <div className={classes.Section3}>
                <Link to={"/"}>Delete Your Profile</Link>
            </div>
        </div>
    )
}

export default UserSideBar