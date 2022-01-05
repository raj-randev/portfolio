import React, {  useRef, useMemo } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';

extend({OrbitControls});

const Particles = () => {

    const { 

        rotationSpeedOne,  
        sizeOne

     } = useControls('Control Panel', { 

        StarSystem: folder({

            rotationSpeedOne: {value: 0.002, min: 0, max: 1, step: 0.001, label: 'Rotation Speed'},
            sizeOne: {value: 0.02, min: 0.005, max: 1, step: 0.001, label: 'Star Size'}

        })

    })

    const textureLoader = new THREE.TextureLoader()

    const particleTexture = textureLoader.load('/textures/particles/8.png')
  
    const staFeildMesh = useRef()

    useFrame(() => {

        staFeildMesh.current.rotation.y += rotationSpeedOne;

    })

    const count = 10000;
  
      const [positions, colors] = useMemo(() => {
  
        const positions = []
        const colors = []
  
        for (let i = 0; i < count; i++) {

          positions[i] = (Math.random() - 0.5) * 15
          colors[i] = Math.random()

        }
        
        return [new Float32Array(positions), new Float32Array(colors)]

      }, [])
  
      return (

        <points ref={staFeildMesh}>

          <bufferGeometry attach="geometry">

            <bufferAttribute 
                attachObject={["attributes", "position"]} 
                count={positions.length / 3} 
                array={positions} 
                itemSize={3} 
                />
            <bufferAttribute 
                attachObject={["attributes", "color"]} 
                count={colors.length / 3}  
                array={colors} 
                itemSize={3} 
                />

          </bufferGeometry>

          <pointsMaterial 
            attach="material" 
            vertexColors 
            size={sizeOne} 
            sizeAttenuation={true} 
            alphaMap={particleTexture} 
            alphaTest={0.001} 
            transparent={true}
            />

        </points>

      )
}

const Torus = () => {

    const { 

        colorTwo,
        rotationSpeedTwo,  
        sizeTwo

     } = useControls('Control Panel', { 

        Torus: folder({

            colorTwo: { value: '#ffffff', label: 'color'},
            rotationSpeedTwo: {value: 0.005, min: 0, max: 1, step: 0.001, label: 'Rotation Speed'},
            sizeTwo: {value: 0.015, min: 0.005, max: 1, step: 0.001, label: 'Point Size'}

        })

    })

    const torusMesh = useRef()

    useFrame(() => {

        torusMesh.current.rotation.y += rotationSpeedTwo;

    })

    return (

        <points ref={torusMesh}>

            <torusBufferGeometry
                args={[2, 0.5, 32, 200]}
            />
            <pointsMaterial 
                size={sizeTwo}
                color={colorTwo}
            />

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
            args={[camera, gl.domElement]}
            ref={orbitRef} 
        />

    )

}

const ParticleSystem = () => {

    const { 

        backgroundColorThree,  

     } = useControls('Control Panel', { 

        backgroundColorThree: { value: '#21282a', label: 'Background Color'},
        
    })


    return (

        <div className='project'>

            <div className='pageTitle'>
                    <h1 style={{color: '#ffffff'}}>{Animation3DArray[3].name}</h1>
            </div>

            <Canvas style={{backgroundColor: backgroundColorThree}}>

                <ambientLight intensity={0.5} />
                <Controls/>
                <Particles />
                <Torus />

            </Canvas>

            <Leva collapsed={true}/>

            <Info text={Animation3DArray[3].description} />

        </div>    
    )
}

export default ParticleSystem;