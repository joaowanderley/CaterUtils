import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/home' component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}