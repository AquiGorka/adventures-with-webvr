import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Theater from './Theater'
import Puppeteer from './Puppeteer'

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Redirect exact from="/" to="/t"/>
        <Route exact path="/t" component={Theater} />
        <Route exact path="/p" component={Puppeteer} />
      </Switch>
  </Router>
  }
}

export default App
