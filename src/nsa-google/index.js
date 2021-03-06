import { EventEmitter } from 'events'
import promisify from 'es6-promisify'
import qmark from 'qmark'
import GoogleURL from 'google-url'
import nsa from '../nsa'

const googleUrl = new GoogleURL({ key: GOOGLE_APIKEY })
const shorten = promisify(googleUrl.shorten.bind(googleUrl))
const expand = promisify(googleUrl.expand.bind(googleUrl))

class NSAGoogle extends EventEmitter {
  constructor() {
    super()
    nsa.on('connect', () => this.emit('connect'))
    nsa.on('close', () => this.emit('close'))
    nsa.on('data', data => this.emit('data', data))
  }

  connect = async id => {
    const longUrl = await expand(`https://goo.gl/${id}`)
    const data = JSON.parse(atob(longUrl.split('?connect=')[1]))
    nsa.connect(data)
  }

  initiator = async url => {
    const signal = await nsa.initiator()
    return await shorten(`${url}?signal=${btoa(JSON.stringify(signal))}`)
  }

  signal = async (url) => {
    const signal = atob(qmark('signal'))
    const data = await nsa.signal(signal)
    const shortUrl = await shorten(`${document.location.origin}?connect=${btoa(JSON.stringify(data))}`)
    return shortUrl.substr(15)
  }

  send(data) {
    nsa.send(data)
  }
}

export default new NSAGoogle()
