import { EventEmitter } from 'events'
import GoogleURL from 'google-url'

const googleUrl = new GoogleURL({ key: GOOGLE_APIKEY })

class NSAGoogle extends EventEmitter {}

export default new NSAGoogle
