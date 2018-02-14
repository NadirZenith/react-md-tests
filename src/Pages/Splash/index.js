import React, {PureComponent} from 'react'
import {
  Button,
  CardActions
} from 'react-md'
import {Redirect, Link} from 'react-router-dom'

import fakeAuth from '../../Utils/FakeAuth'

export default class Splash extends PureComponent {

  render() {
    const {from} = {from: {pathname: '/'}}

    if (fakeAuth.isAuthenticated) {
      return <Redirect to={from}/>
    }

    return (
        <div className="md-grid234">
          <CardActions className="md-cell md-cell--12">
            <Link to="/login" className="md-cell--right">
              <Button raised secondary>Login</Button>
            </Link>

            <Link to="/register" className="md-cell--right">
              <Button raised primary>Register</Button>
            </Link>
          </CardActions>
        </div>
    )
  }
}

