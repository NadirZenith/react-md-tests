import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavLink from '../Utils/NavLink'
import PrivateRoute from '../Utils/PrivateRoute'

import Home from './Home/Home'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import Page3 from './Page3/Page3'
import Form from './Form'
import Splash from './Splash'
import Login from './Login'
import Register from './Register'

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Page 1',
  to: '/page-1',
  icon: 'bookmark',
}, {
  label: 'Page 2',
  to: '/page-2',
  icon: 'donut_large',
}, {
  label: 'Page 3 (protected)',
  to: '/page-3',
  icon: 'flight_land',
}, {
  label: 'Form',
  to: '/form',
  icon: 'input',
}, {
  label: 'Splash',
  to: '/splash',
  icon: 'input',
}, {
  label: 'Login',
  to: '/login',
  icon: 'input',
}, {
  label: 'Register',
  to: '/register',
  icon: 'input',
}]

class App extends Component {
  render() {
    return (
        <Route
            render={({location}) => (
                <NavigationDrawer
                    drawerTitle="react-md with CRA"
                    toolbarTitle="Welcome to react-md"
                    // toolbarTitleMenu={null}
                    navItems={navItems.map(props => <NavLink {...props} key={props.to}/>)}
                >
                  <Switch key={location.key}>
                    <Route exact path="/" location={location} component={Home}/>
                    <Route path="/page-1" location={location} component={Page1}/>
                    <Route path="/page-2" location={location} component={Page2}/>
                    <PrivateRoute path="/page-3" location={location} component={Page3}/>
                    <Route path="/form" location={location} component={Form}/>
                    <Route path="/splash" location={location} component={Splash}/>
                    <Route path="/login" location={location} component={Login}/>
                    <Route path="/register" location={location} component={Register}/>

                  </Switch>
                </NavigationDrawer>
            )}
        />
    )
  }
}

export default App
