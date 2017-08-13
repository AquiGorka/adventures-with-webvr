import React from 'react'
import 'aframe-animation-component'
import Peer from 'peerjs'
import config from '../../../config'
import queryString from 'query-string'

let rotation = { x: 0, y: 0, z: 0 }

const parsed = queryString.parse(location.search)
const pid = parsed.pid || 'pid'

const peer = new Peer(config)
const conn = peer.connect(pid);
conn.on('open', () => {
  console.log('Connected')
  // connected
  conn.on('data', data => {
    const { alpha, beta, gamma } = data
    console.log('gamma: ', alpha)
    rotation = { ...rotation, y: alpha, x: beta }
  })
})

AFRAME.registerComponent('async-rotation', {
  tick: function () {
    this.el.setAttribute('rotation', rotation)
  }
});

export default () => {
  return <a-scene>
    <a-assets>
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
      <a-sound src="https://cdn.aframe.io/basic-guide/audio/backgroundnoise.wav" autoplay="true" position="-3 1 -4"></a-sound>
    </a-assets>
    
    <a-box src="#boxTexture" position="0 0 -5" rotation="0 45 0" color="#4CC3D9">
      <a-animation attribute="position" to="0 5 -10" direction="alternate" dur="2000" repeat="indefinite"></a-animation>
    </a-box>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="1 1 -2" radius="0.2" color="#EF2D5E"></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>

    <a-sky color="#222"></a-sky>
    
    <a-entity
      async-rotation
      light="type: spot; angle: 15; intensity: 0.5; penumbra: 1; decay: 1; distance: 10;"
      position="0 1 -1"
      rotation="0 0 0">
    </a-entity>

    <a-camera>
      <a-cursor></a-cursor>
    </a-camera>
  </a-scene>
} 
