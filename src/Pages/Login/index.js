import React, { PureComponent} from 'react'
import {
  Button,
  CardActions,
  TextField,
  Snackbar
} from 'react-md';
import {Redirect} from 'react-router-dom'

import fakeAuth from '../../Utils/FakeAuth'

export default class Login extends PureComponent {
// export default class Login extends Component {
  state = { toasts: [], redirectToReferrer: false };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.toasts.length) {
      const toasts = this.state.toasts.slice();
      toasts.push({
        text: 'Logging In',
        action: 'Neat!',
      });
      this.setState({ toasts });
    }

    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  };

  handleDismiss = () => {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }}

    const { toasts, redirectToReferrer } = this.state


    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    return (
        <div className="md-grid234">
          <p>You must log in to view the page at {from.pathname}</p>
          <form className="md-grid text-fields__application" onSubmit={this.handleSubmit}>
            <TextField
                id="email"
                label="Email"
                defaultValue=""
                customSize="title"
                className="md-cell md-cell--12"
                required
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                className="md-cell md-cell--12"
                required
            />
            <CardActions className="md-cell md-cell--12">
              <Button raised primary type="submit" className="md-cell--right">Login</Button>
            </CardActions>
          </form>
          <Snackbar id="application-toasts" toasts={toasts} onDismiss={this.handleDismiss} />
        </div>
    )
  }
}