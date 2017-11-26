import React, { Component } from 'react'
import nsa from '../../nsa-google'

class Puppeteer extends Component {

  state = { id: null }

  async componentDidMount() {
    const id = await nsa.signal()
    this.setState({ id })
  }

  render() {
    if (!this.state.id) {
      return null
    }

    return <div>{this.state.id}</div>
  }
}

export default Puppeteer
