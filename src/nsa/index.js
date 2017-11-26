import Peer from 'simple-peer'
import EventEmitter from 'events'

class NSA extends EventEmitter {
  constructor() {
    super()
    this.peer = null
  }

   init = () => {
    this.peer.on('connect', () => this.emit('connect'))
    this.peer.on('data', data => this.emit('data', JSON.parse(data)))
    this.peer.on('close', () => this.emit('close'))
  }

  initiator() {
    return new Promise((resolve, reject) => {
      this.peer = new Peer({ initiator: true, trickle: false })
      this.peer.on('signal', resolve)
      this.init()
    })
  }

  connect(data) {
    if (!this.peer) {
      throw new Error('Please use initiator or signal')
    }
    this.peer.signal(data)
  }

  signal(data) {
    return new Promise((resolve, reject) => {
      this.peer = new Peer({ trickle: false })
      this.peer.signal(data)
      this.peer.on('signal', resolve)
      this.init()
    })
  }

  send(data) {
    this.peer.send(JSON.stringify(data))
  }
}

export default new NSA()
