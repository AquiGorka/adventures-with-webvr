import React, { Component } from 'react'
import Connect from './Connect'
import Controls from './Controls'
import nsa from '../../nsa-google'

const CONNECT = 'show id to connect'
const CONTROLS = 'send controls data'

class Puppeteer extends Component {

  state = { mode: CONNECT }

  componentDidMount() {
    nsa.on('connect', () => this.setState({ mode: CONTROLS }))
    nsa.on('close', () => this.setState({ mode: CONNECT }))
  }

  render() {
    if (this.state.mode !== CONTROLS ) {
      return <Connect />
    }

    return <Controls />
  }
}

export default Puppeteer
