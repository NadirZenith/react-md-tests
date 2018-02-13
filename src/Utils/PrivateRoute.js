import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import fakeAuth from "./FakeAuth"

export default ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
    )}/>
)