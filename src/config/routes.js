import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../Home-Login/Login'
import SignUp from '../Home-Login/SignUp'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'

export default (props) => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path='/' component={ Homepage } /> */}
            <Route path={'/'} exact component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
            <Route path={'/profile'} component={Profile}/>
        </Switch>
    </BrowserRouter>
)
