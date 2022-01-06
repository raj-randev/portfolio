import React, { useState, useRef, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';
import MODEL from './models-3d/Fox.glb';

extend({OrbitControls});



const Model = () => {
    const gltf = useLoader(GLTFLoader, MODEL)
    return (
        <>
            <primitive  position={[0, 0, 0]} object={gltf.scene} scale={0.02} />
        </>
    );
};

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

const Plane = () => {

    const { 

        planeColor
  
      } = useControls('Control Panel',{ 
  
        planeColor: { value: '#000000', label: 'Background Color' },
          
    }) 

    return (

        <mesh 
            rotation={[-Math.PI/ 2, 0, 0]} 
            position={[0, -0.5, 0]}
            receiveShadow
        >
            
            <planeBufferGeometry
                attach='geometry'
                args={[100, 100]}
            />

            <meshPhysicalMaterial 
                attach='material'
                color={planeColor}

            /> 

        </mesh>
    )
}

const FoxAnimate = () => {

    return (

        <div className='project'>

            <div className='pageTitle'>
                <h1 style={{color: '#ffffff'}}>{Animation3DArray[1].name}</h1>
            </div>

            <Canvas 
                camera={{position: [-3, 0, 4]}} 
                onCreated={({gl}) => {
                    gl.shadowMap.enabled = true
                    gl.shadowMap.type = THREE.PCFShadowMap
                }}
                width='100%'
                height='100%'
            >

                <ambientLight />

                <spotLight 
                    position={[0, 5, 10]}
                    penumbra={1} 
                    castShadow
                />

                <Controls />

                <Model />

                <Plane />
                
            </Canvas>

            <Leva collapsed={true}/>

            <Info text={Animation3DArray[1].description} />
            
        </div>
    )
}

export default FoxAnimate;