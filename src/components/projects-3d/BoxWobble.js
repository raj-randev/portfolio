import React, { useState, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { useControls, folder, Leva } from 'leva'
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';

extend({OrbitControls});


/**
 * Camera Controls
 */

const ControlOrbit = () => {

    const {camera, gl} = useThree();

    const orbitRef = useRef();

    useFrame(() => {
        orbitRef.current.update();
    })

    return (

        <orbitControls
            maxPolarAngle={Math.PI /2}
            minPolarAngle={Math.PI /2}
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />

    )

}


/**
 * Box Component
 */

const Box = ({position, args, speed, color, rotationSpeed}) => {

    const mesh = useRef(null);

    const [expand, setExpand] = useState(false);

    //Onclick enlarge instructions
    const props = useSpring({

        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]

    });

    //Rotation
    useFrame(() => {

        mesh.current.rotation.x += rotationSpeed
        mesh.current.rotation.y += rotationSpeed

    });

    return (

        <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} castShadow position={position} ref={mesh} >
            <boxBufferGeometry attach='geometry' args={args} />
            <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />
        </a.mesh>

    );

}


/**
 * Plane Component
 */

const Plane = () => {

    return (

        <mesh receiveShadow rotation={[-Math.PI/ 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' />
        </mesh>

    );

}


/**
 * Main component
 */

const BoxWobble = () => {

    /**
     * Leva Control Panel
     */
    
    const { 

        bg, 
        colorOne, 
        colorTwo,
        colorThree, 
        wobbleSpeedOne, 
        wobbleSpeedTwo,
        wobbleSpeedThree, 
        xCoordinatesOne, 
        yCoordinatesOne, 
        zCoordinatesOne,
        xCoordinatesTwo, 
        yCoordinatesTwo, 
        zCoordinatesTwo,
        xCoordinatesThree, 
        yCoordinatesThree, 
        zCoordinatesThree, 
        rotationSpeedOne,
        rotationSpeedTwo,
        rotationSpeedThree

     } = useControls('Control Panel', { 

        bg: { value: '#ffffff', label: 'background' },

        BoxOne: folder({

            colorOne: { value: '#add8e6', label: 'color'},
            wobbleSpeedOne: {value: 2, min: 0, max: 10, step: 0.01, label: 'Wobble Speed'},
            xCoordinatesOne: {value: 0, min: -5, max: 5, step:0.01, label: 'X Coordinates'},
            yCoordinatesOne: {value: 1, min: -5, max: 5, step:0.01, label: 'Y Coordinates'},
            zCoordinatesOne: {value: 0, min: -5, max: 5, step:0.01, label: 'Z Coordinates'},
            rotationSpeedOne: {value: 0.01, min: 0, max: 5, step:0.01, label: 'Rotation Speed'}

        }),

        BoxTwo: folder({

            colorTwo: { value: '#ff69b4', label: 'color'},
            wobbleSpeedTwo: {value: 6, min: 0, max: 10, step: 0.01, label: 'Wobble Speed'},
            xCoordinatesTwo: {value: -2, min: -5, max:5, step:0.01, label: 'X Coordinates'},
            yCoordinatesTwo: {value: 1, min: -5, max:5, step:0.01, label: 'Y Coordinates'},
            zCoordinatesTwo: {value: -5, min: -5, max:5, step:0.01, label: 'Z Coordinates'},
            rotationSpeedTwo: {value: 0.01, min: 0, max: 5, step:0.01, label: 'Rotation Speed'}

        }),

        BoxThree: folder({

            colorThree: { value: '#ff69b4', label: 'color'},
            wobbleSpeedThree: {value: 6, min: 0, max: 10, step: 0.01, label: 'Wobble Speed'},
            xCoordinatesThree: {value: 5, min: -5, max:5, step:0.01, label: 'X Coordinates'},
            yCoordinatesThree: {value: 1, min: -5, max:5, step:0.01, label: 'Y Coordinates'},
            zCoordinatesThree: {value: -2, min: -5, max:5, step:0.01, label: 'Z Coordinates'},            
            rotationSpeedThree: {value: 0.01, min: 0, max: 5, step:0.01, label: 'Rotation Speed'}

        })
     
    })

    return (

        <div className='project'>
            <div className='pageTitle'>
                <h1>{Animation3DArray[0].name}</h1>
            </div>
            <Canvas gl={{shadowMap: true}} shadowMap style={{backgroundColor: bg }} camera={{ position: [-3, 2, 8], fov: 60 }}>

                <ambientLight 
                    intensity={0.3} 
                    />

                <directionalLight 
                    castShadow
                    position={[0, 10, 0]} 
                    intensity={1.5} 
                    shadow-mapSize-width={1024} 
                    shadow-mapSize-height={1024} 
                    shadow-camera-far={50} 
                    shadow-camera-left={-10} 
                    shadow-camera-right={10} 
                    shadow-camera-top={10} 
                    shadow-camera-bottom={-10}
                    />

                <pointLight  
                    position={[-10, 0, -20]} 
                    intensity={0.5}
                    />

                <pointLight  
                    position={[0, -10, 0]} 
                    intensity={1}
                    />

                <Plane />

                <ControlOrbit />  

                <Box 
                    color={colorOne}
                    position={[xCoordinatesOne, yCoordinatesOne, zCoordinatesOne]} 
                    args={[3, 2, 1]} 
                    speed={wobbleSpeedOne}
                    rotationSpeed={rotationSpeedOne}
                    />

                <Box 
                    color={colorTwo}
                    position={[xCoordinatesTwo, yCoordinatesTwo, zCoordinatesTwo]} 
                    speed={wobbleSpeedTwo}
                    rotationSpeed={rotationSpeedTwo}
                    />

                <Box 
                    color={colorThree}
                    position={[xCoordinatesThree, yCoordinatesThree, zCoordinatesThree]} 
                    speed={wobbleSpeedThree}
                    rotationSpeed={rotationSpeedThree}
                    />
                
            </Canvas>

            <Leva collapsed={true}/>

            <Info title={Animation3DArray[0].name} repoAddress={Animation3DArray[0].repo} text={Animation3DArray[0].description} />

        </div>
        
  );

}

export default BoxWobble;