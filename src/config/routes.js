import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../Pages/Home"
import Profile from "../Pages/Profile"

export default () => (
        <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/profile"} component={Profile} />
        </Switch>
    )
