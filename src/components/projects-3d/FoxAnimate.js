import React, { useState, useRef, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';

extend({OrbitControls});

const FoxBody = () => {
  
    const { 

        foxScale, 
        foxPositionX,
        foxPositionZ
  
    } = useControls('Control Panel',{ 
  
        Fox: folder({

            foxPositionX: {value: 0, min: -200, max: 200, step: 1, label: 'Position X'},
            foxPositionZ: {value: 0, min: -200, max: 200, step: 1, label: 'Position Z'},
            foxScale: {value: 0.02, min: 0.01, max: 2, step: 0.01, label: 'Scale'}

        })
        
    })  
    
    const [model, setModel] = useState();
    
    useEffect(() => {

        new GLTFLoader().load('Fox.gltf', setModel)

    }, []);
        
    return model ? <primitive 
        object={model.scene} 
        position={[foxPositionX, 0, foxPositionZ]} 
        scale={foxScale} 
        /> : null
    
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

                <FoxBody />

                <Plane />
                
            </Canvas>

            <Leva collapsed={true}/>

            <Info text={Animation3DArray[1].description} />
            
        </div>
    )
}

export default FoxAnimate;