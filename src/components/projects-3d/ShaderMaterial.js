import * as THREE from 'three';
import React, { useRef, Suspense} from 'react';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';
import { useControls, folder, Leva } from 'leva';


const WaveShaderMaterial = shaderMaterial(

  //uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0), 
    uTexture: new THREE.Texture()
  },

  //Vertex Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 1.1;
      float noiseAmp = 0.3;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,

  //fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;  

    uniform float uTime;

    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.01;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture , 1.0);
    }
  `

);

extend({WaveShaderMaterial});

const Wave = () => {
  const ref = useRef();

  const { 

    sizeOne,
    pieces

 } = useControls('Control Panel', { 

    Image: folder({

        sizeOne: {value: 3, min: 1, max: 10, step: 0.001, label: 'Size'},
        pieces: { value: 80, min: 10, max: 200, step: 1, label: 'Pieces'}

    })
})

  useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, ['/textures/office/office.jpg'])

  return (
    <mesh>
      <planeBufferGeometry args={[sizeOne, sizeOne * 2, pieces, pieces]} />
      <waveShaderMaterial ref={ref} uColor={'hotpink'} uTexture={image}/>
    </mesh>
  )
}

const Scene = () => {

    const { 

        bgG
    
     } = useControls('Control Panel', { 
    
        bgG: { value: '#000000', label: 'Background Color' }
    
    })

return (
  <div className='project'>
    <div className='pageTitle'>
                <h1 style={{color: '#ffffff'}}>{Animation3DArray[8].name}</h1>
            </div>  
    <Canvas style={{backgroundColor: bgG}}>
        <Suspense fallback={null}>
        <Wave />
        </Suspense>
        
    </Canvas>
    <Leva collapsed={true}/>

    <Info title={Animation3DArray[8].name} repoAddress={Animation3DArray[8].repo} text={Animation3DArray[8].description} />
  </div>
  )
}

const ShaderMaterial = () => {

  return (
    <Scene />
  )
}

export default ShaderMaterial;