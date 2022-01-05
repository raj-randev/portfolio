import React, { useState, useRef, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import * as THREE from 'three';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';

extend({OrbitControls})

const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('/textures/bobble.png')


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

const Sphere = () => {

    const { 

        colorOne,  
        metalnessOne,
        roughnessOne,
        scaleOne,
        xCoordinatesOne, 
        yCoordinatesOne, 
        zCoordinatesOne

     } = useControls('Control Panel',{ 

        Sphere: folder({

            colorOne: { value: '#000000', label: 'color'},
            metalnessOne: {value: 0.7, min: 0, max: 1, step: 0.01, label: 'Metalness'},
            roughnessOne: {value: 0.7, min: 0, max: 1, step: 0.01, label: 'Rougness'},
            scaleOne: {value: 1, min: 1, max: 20, step: 0.01, label: 'Scale'},
            xCoordinatesOne: {value: 0, min: -5, max:5, step:0.01, label: 'X Coordinates'},
            yCoordinatesOne: {value: 0, min: -5, max:5, step:0.01, label: 'Y Coordinates'},
            zCoordinatesOne: {value: 0, min: -5, max:5, step:0.01, label: 'Z Coordinates'}

        })

     })
    
    const [active, setActive] = useState(false);
    const mesh = useRef()
   
    useFrame(() => {

        mesh.current.rotation.x += 0.005;
        mesh.current.rotation.y += 0.005;

    })
    
    return (

        <a.mesh 
        ref={mesh}
        onClick={() => setActive(!active)}
        scale={[scaleOne, scaleOne, scaleOne]}
        castShadow
        position={[xCoordinatesOne, yCoordinatesOne, zCoordinatesOne ]}
        > 

            <sphereBufferGeometry 
                attach='geometry'
                args={[1, 100, 100]}
            />
            
            <a.meshStandardMaterial 
                attach='material'
                color={colorOne}
                metalness={metalnessOne}
                roughness={roughnessOne}
                normalMap={normalTexture}
            /> 

        </a.mesh>
        
    )

}

const PointLight = () => {
    
    const { 

        colorTwo,  
        intensityTwo,
        xCoordinatesTwo, 
        yCoordinatesTwo, 
        zCoordinatesTwo

     } = useControls('Control Panel',{ 

        PointLight: folder({

            colorTwo: { value: '#ff0000', label: 'Color'},
            intensityTwo: {value: 10, min: 0, max: 20, step: 0.01, label: 'Intensity'},
            xCoordinatesTwo: {value: -3.734, min: -10, max:10, step:0.001, label: 'X Coordinates'},
            yCoordinatesTwo: {value: 1.78, min: -10, max:10, step:0.001, label: 'Y Coordinates'},
            zCoordinatesTwo: {value: -6, min: -10, max:10, step:0.01, label: 'Z Coordinates'}

        })

     })

    const pointLight = useRef()
    
    return (

        <pointLight 
            ref={pointLight}
            args={[colorTwo]}
            position={[xCoordinatesTwo, yCoordinatesTwo, zCoordinatesTwo]}
            intensity={intensityTwo}
        />
    )
}

const SpotLight = () => {

    const { 

        colorThree,  
        intensityThree,
        xCoordinatesThree, 
        yCoordinatesThree, 
        zCoordinatesThree

     } = useControls('Control Panel',{ 

        SpotLight: folder({

            colorThree: { value: '#37a9e0', label: 'Color'},
            intensityThree: {value: 10, min: 0, max: 20, step: 0.01, label: 'Intensity'},
            xCoordinatesThree: {value: 6.192, min: -10, max:10, step:0.001, label: 'X Coordinates'},
            yCoordinatesThree: {value: -10, min: -10, max:10, step:0.001, label: 'Y Coordinates'},
            zCoordinatesThree: {value: 5.559, min: -10, max:10, step:0.01, label: 'Z Coordinates'}

        })

     })

    const spotLight = useRef()
   
    return (

        <spotLight 
            ref={spotLight}
            args={[colorThree]}
            position={[xCoordinatesThree, yCoordinatesThree, zCoordinatesThree]}
            penumbra={1} 
            intensity={intensityThree}
            castShadow
            />

    )

}


const SpinningBall = () => {

    const { 

        colorFour,  
        sizeFour

     } = useControls('Control Panel',{ 

        Text: folder({

            colorFour: { value: '#ffffff', label: 'Color'},
            sizeFour: {value: 8, min: 0, max: 20, step: 0.01, label: 'Font Size'}

        })

     })

    const canvasRef = useRef()

    useEffect(() => {

        let canvas = canvasRef.current;

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleResize = () => {

            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;

        }

        window.addEventListener('resize', handleResize);  

    }, [])

    return (

        <div style={{
            height: '100vh', 
            display: 'grid', 
            placeItems: 'center',
            overflow: 'hidden'
            }}>
            <h1 style={{
                position: 'absolute', 
                color: `${colorFour}`, 
                zIndex: '3',
                textTransform: 'uppercase',
                fontSize: `${sizeFour}vw`
                }}>
                    {Animation3DArray[2].name}
            </h1>

            <Canvas 
            ref={canvasRef}
            camera={{position: [0, 0, 4]}} 
            onCreated={({gl}) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFShadowMap
            }}
            style={{backgroundColor: '#191819', position: 'absolute'}}
            >

                <ambientLight />

                <SpotLight />

                <PointLight />
                
                <Controls />
                
                <Sphere/>
                
            </Canvas>

            <Leva collapsed={true}/>

            <Info text={Animation3DArray[2].description} />

        </div>

    )
    
}

export default SpinningBall;