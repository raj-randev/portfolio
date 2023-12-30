import React, {  useRef, useCallback, useMemo } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';


extend({OrbitControls});

const Particles = () => {

  const { 

    amplitudeOne,
    frequencyOne,  
    periodOne

    } = useControls('Control Panel', { 

    Wave: folder({

        amplitudeOne: {value: 1.78, min: 0, max: 10, step: 0.001, label: 'Amplitude'},
        frequencyOne: {value: 0.002, min: 0, max: 0.05, step: 0.001, label: 'Frequency'},
        periodOne: {value: 0.49, min: 0, max: 10, step: 0.001, label: 'Period'}

    })

  })
  
  const textureLoader = new THREE.TextureLoader()
  
  const particleTexture = textureLoader.load('/textures/particles/2.png')

  const bufferRef = useRef();

  let t = periodOne;
  let f = frequencyOne;
  let a = amplitudeOne;

  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  const count = 80
  const sep = 3

  let [positions, colors] = useMemo(() => {

    let positions = []
    let colors = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
        colors.push(x * Math.random() , y * Math.random(), z * Math.random())
      }
    }

    return [new Float32Array(positions), new Float32Array(colors)]

  }, [count, sep, graph])

  useFrame(() => {
    t += 15;
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;

  })

  return (

    <points>

      <bufferGeometry attach="geometry">

        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={['attributes', 'color']}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />

      </bufferGeometry>

      <pointsMaterial
        attach="material" 
        vertexColors 
        size={1} 
        sizeAttenuation={true} 
        alphaMap={particleTexture} 
        alphaTest={0.001} 
        transparent={true}
      />

    </points>
  );
}

const Controls = () => {

    const {camera, gl} = useThree();

    const orbitRef = useRef();

    useFrame(() => {

        orbitRef.current.update();

    })

    return (

        <orbitControls
            maxPolarAngle={Math.PI /3}
            minPolarAngle={Math.PI /3}
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />

    )
}

const ParticleWaves = () => {

  
  return (

    <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation3DArray[4].name}</h1>
        </div>

        <Canvas 
          camera={{position: [-100, 0, 0]}}  
          style={{backgroundColor: '#000000'}}>

          <ambientLight intensity={0.5} />
          <Controls />
          <Particles/> 

        </Canvas>

        <Leva collapsed={true}/>

        <Info title={Animation3DArray[4].name} repoAddress={Animation3DArray[4].repo} text={Animation3DArray[4].description} />

    </div>  

  );
  
}

export default ParticleWaves