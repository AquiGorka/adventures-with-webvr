import React, { Component } from 'react'
import nsa from '../../../nsa-google'

class Connect extends Component {

  state = { link: false }

  async componentDidMount() {
    const url = document.location.origin + '/p'
    const link = await nsa.initiator(url)
    this.setState({ link })
  }

  render() {
    if (!this.state.link) {
      return null
    }

    return <div>
      <div>{this.state.link}</div>
      <form onSubmit={this.onSubmit} ref={f => (this.form = f)}>
        <input type="text" placeholder="Id" />
        <button type="submit">Connect</button>
      </form>
    </div>
  }

  onSubmit = e => {
    e.preventDefault()
    const id = this.form.elements[0].value
    console.log(id)
    nsa.connect(id)
  }
}

export default Connect
