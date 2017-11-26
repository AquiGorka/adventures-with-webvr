import React, { Component } from 'react'
import nsa from '../../nsa-google'

class Connect extends Component {

  state = { link: false }

  async componentDidMount() {
    const link = await nsa.initiator()
    this.setState({ link })
  }

  render() {
    if (!this.state.link) {
      return null
    }

    return <div>
      <div>{this.state.link}</div>
    </div>
  }
}

export default Connect
