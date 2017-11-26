import { EventEmitter } from 'events'
import promisify from 'es6-promisify'
import GoogleURL from 'google-url'
import nsa from '../nsa'

const googleUrl = new GoogleURL({ key: GOOGLE_APIKEY })
const shorten = promisify(googleUrl.shorten.bind(googleUrl))

class NSAGoogle extends EventEmitter {
  constructor() {
    super()
    nsa.on('connect', () => this.emit('connect'))
    nsa.on('close', () => this.emit('close'))
    nsa.on('connect', data => this.emit('data', data))
  }

  initiator = async url => {
    const signal = await nsa.initiator()
    return await shorten(`${url}?signal=${btoa(JSON.stringify(signal))}`)
  }

  signal = async () => {}
}

export default new NSAGoogle()
