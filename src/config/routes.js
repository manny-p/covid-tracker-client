import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'

export default (props) => (
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path={'/profile'} component={Profile}/>
        </Switch>
)
