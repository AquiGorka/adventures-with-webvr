import React from 'react'
import { DeviceOrientation } from 'react-fns'
import nsa from '../../../nsa-google'

const Controls = () => <DeviceOrientation
  render={({ alpha, beta, gamma, absolute }) => {
    nsa.send({ alpha, beta })
    return <pre>
      {JSON.stringify({ alpha, beta, gamma, absolute }, null, 2)}
    </pre>
  }}
/>

export default Controls
