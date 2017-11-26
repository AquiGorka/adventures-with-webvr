import React, { PureComponent } from 'react'
import nsa from '../../nsa-google'
import './App.css'
import Scene from './Scene'
import Connect from './Connect'

const CONNECT = 'show user connect flow'
const SCENE = 'show user webvr scene'

class App extends PureComponent {

  state = { mode: CONNECT }

  componentDidMount() {
    nsa.on('connect', () => this.setState({ mode: SCENE }))
    nsa.on('close', () => this.setState({ mode: CONNECT }))
  }

  render() {
    if (this.state.mode !== SCENE) {
      return <Connect />
    }

    return <Scene />
  }
}

export default App
