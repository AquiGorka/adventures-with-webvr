import React, { PureComponent } from 'react'
import 'aframe'

import './App.css'
import Home from './sections/home'

class App extends PureComponent {
  render() {
    return <div className="App">
      <Home />
    </div>
  }
}

export default App
