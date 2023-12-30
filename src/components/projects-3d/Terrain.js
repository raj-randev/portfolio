import React, { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';

extend({OrbitControls});

const textureLoader = new THREE.TextureLoader()

const texture = textureLoader.load('/textures/terrain/texture.jpg')
const height = textureLoader.load('/textures/terrain/height.png')

const Controls = () => {

    const {camera, gl} = useThree();
    const orbitRef = useRef();

    useFrame(() => {

        orbitRef.current.update();

    })

    return (

        <orbitControls
            autoRotate 
            maxPolarAngle={Math.PI /3}
            minPolarAngle={Math.PI /3}
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />

    )

}

const Plane = () => {
    
    const { 

        widthOne,
        depthOne, 
        colorOne

     } = useControls('Control Panel', { 

        Terrain: folder({

            widthOne: {value: 4.48, min: 1, max: 20, step: 0.001, label: 'Width'},
            depthOne: {value: 4.06, min: 1, max: 20, step: 0.001, label: 'Depth'},
            colorOne: {value: 'grey', label: 'Color'}

        })
    })

    return (

        <mesh 
        rotation={[-Math.PI/ 2, 0, 0]} 
        position={[0, -0.5, 0]}
        receiveShadow
        >

            <planeBufferGeometry
                attach='geometry'
                args={[widthOne, depthOne, 100, 100]}
            />
            <meshStandardMaterial 
                attach='material'
                color={colorOne}
                map={texture}
                displacementMap={height}
               
            /> 

        </mesh>

    )

}

const Terrain = () => {

    const { 

        bgColorTwo

     } = useControls('Control Panel', { 

        bgColorTwo: {value: '#000000', label: 'Background Color'}
        
    })

    return (

        <div className='project'>
            <div className='pageTitle'>
                <h1 style={{color: '#ffffff'}}>{Animation3DArray[7].name}</h1>
            </div>

            <Canvas 
            camera={{position: [0, 0, 2]}} 
            onCreated={({gl}) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFShadowMap
            }}
            width='100%'
            height='100%'
            style={{backgroundColor: `${bgColorTwo}`}}
            >

                <ambientLight />

                <spotLight 
                position={[0, 5, 10]}
                penumbra={1} 
                intensity={2}
                castShadow
                />

                <Controls />

                <Plane />
                
            </Canvas>

            <Leva collapsed={true}/>

            <Info title={Animation3DArray[7].name} repoAddress={Animation3DArray[7].repo} text={Animation3DArray[7].description} />

        </div>

    )
    
}

export default Terrain;