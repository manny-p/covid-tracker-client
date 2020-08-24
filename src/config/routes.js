import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

import Login from '../Home-Login/Login'
import Homepage from '../Home-Login/Homepage'
import Register from '../Home-Login/Register'

export default (props) => (

    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Homepage } />
      <Route path='/login' component={ Login } />
      <Route path='/register' component={ Register } />
      
      
    </Switch>
    </BrowserRouter>
  )
