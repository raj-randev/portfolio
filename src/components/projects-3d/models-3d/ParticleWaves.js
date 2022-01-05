import React, { useState, useRef, useEffect, useMemo } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'


extend({OrbitControls});

const gui = new GUI()

const textureLoader = new THREE.TextureLoader()

const particleTexture = textureLoader.load('/textures/particles/2.png')

const Particles = () => {
    const count = 10000;
    const sep = 3;

    const [positions, colors] = useMemo(() => {

      const positions = []
      const colors = []

      for (let xi = 0; xi < count; xi++) {
        for(let zi = 0; zi < count; zi++) {
          let x = sep * (xi - count / 2);
          let z = sep * (zi - count / 2);
          let y = 0;
          positions.push(x, y, z);
        }
      }
      
      return [new Float32Array(positions), new Float32Array(colors)]
    }, [])
  
    return (
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial attach="material" vertexColors size={0.1} sizeAttenuation={true} alphaMap={particleTexture} alphaTest={0.001} transparent={true}/>
      </points>
    )
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
    
      <Canvas style={{backgroundColor: '#000000'}}>
        <ambientLight intensity={0.5} />
        <Controls />
          <Particles pointCount={200} />        
      </Canvas>
      
  );
}

export default ParticleWaves