import React from './node_modules/react'
import { Link } from './node_modules/react-router-dom'
import classes from "./UserSideBar.module.css"

function UserSideBar() {
    return (
        <div className={classes.UserSideBar}>
            <div>
            <h1>Your Profile</h1>
            <div className={classes.Section1}>
                <p>Email:</p>
                <p>info@info.com</p>
                <p>Edit</p>{"|"}
                <p>Save</p>
            </div> 
            </div>
            <div className={classes.Section2}>
                <h1>Additional Info</h1>
                <div>
                    <p>Name:</p>
                    <p>Edit</p>{"|"}
                    <p>Save</p>
                </div>
                <div>
                    <p>Last Name:</p>
                    <p>Edit</p>{"|"}
                    <p>Save</p>
                </div>
                <div>
                    <p>Phone Number:</p>
                    <p>Edit</p>{"|"}
                    <p>Save</p>
                </div>
            </div>
            <div className={classes.Section3}>
                <Link to={"/"}>Delete Your Profile</Link>
            </div>
        </div>
    )
}

export default UserSideBar