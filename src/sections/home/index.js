import React from 'react'
import 'aframe-animation-component'

export default () => {
  /*
  light reference: https://aframe.io/docs/0.6.0/components/light.html#spot
  */
  return <a-scene>
    <a-assets>
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
      <a-sound src="https://cdn.aframe.io/basic-guide/audio/backgroundnoise.wav" autoplay="true" position="-3 1 -4"></a-sound>
    </a-assets>
    
    <a-box src="#boxTexture" position="0 0 -5" rotation="0 45 0" color="#4CC3D9">
      <a-animation attribute="position" to="0 5 -10" direction="alternate" dur="2000" repeat="indefinite"></a-animation>
    </a-box>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="10 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>

    <a-sky color="#222"></a-sky>
    
    <a-entity
      light="type: spot; angle: 15; intensity: 0.5; penumbra: 1; decay: 1; distance: 10;"
      position="0 1 -1"
      rotation="0 0 0"
      animation="property: rotation; from:0 -30 0; to:0 30 0; dur:3000; dir:alternate; loop:true;"
    >
    </a-entity>

    <a-camera>
      <a-cursor></a-cursor>
    </a-camera>
  </a-scene>
} 
