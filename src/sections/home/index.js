import React from 'react'
import 'aframe'

export default () => {
        /*
    <a-sky color="#ECECEC"></a-sky>
        */
/*
        <a-entity id="rain" particle-system="preset: rain; color: #24CAFF; particleCount: 5000"></a-entity>
      <a-entity id="ocean" ocean="density: 20; width: 50; depth: 50; speed: 4"
                material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
                rotation="-90 0 0"></a-entity>
      <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
                material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
                scale="-1 1 1"></a-entity>

      <a-entity id="light" light="type: ambient; color: #888"></a-entity>

      <a-entity id="sphere" geometry="primitive: sphere"
                material="color: #EFEFEF; shader: flat"
                position="0 0.15 -5"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></a-entity>

      <a-sound src="https://cdn.aframe.io/basic-guide/audio/backgroundnoise.wav" autoplay="true" position="-3 1 -4"></a-sound>

    <a-entity light="type: directional; castShadow: true; intensity: 2; shadowCameraVisible: true;" position="0 0 -50"></a-entity>
*/
  return <a-scene>
    <a-assets>
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
    </a-assets>
    <a-box src="#boxTexture" position="0 0 -5" rotation="0 45 0" color="#4CC3D9">
      <a-animation attribute="position" to="0 5 -10" direction="alternate" dur="2000" repeat="indefinite"></a-animation>
    </a-box>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="10 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#222"></a-sky>
    
    <a-entity light="type: spot; angle: 10; intensity: 1; penumbra: 0.5;" position="0 1 -1"></a-entity>

    <a-camera>
      <a-cursor></a-cursor>
    </a-camera>
  </a-scene>
} 
