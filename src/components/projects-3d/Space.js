import React, { useRef, useMemo } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {shaderMaterial} from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';


extend({OrbitControls});

const textureLoader = new THREE.TextureLoader()

const earthMap = textureLoader.load('/textures/earth/globe.jpg')

const PlanetShaderMaterial = shaderMaterial(

    //uniform
    {uTexture: new THREE.Texture()},

    //Vertex Shader
    glsl`
        
        varying vec2 vUv;
        varying vec3 vectorNormal;
        
        void main() {
            vUv = uv;
            vectorNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,

    //Fragment Shader
    glsl`
    
        uniform sampler2D uTexture;
        varying vec2 vUv;
        varying vec3 vectorNormal;

        void main() {
            float intensity = 1.05 - dot(vectorNormal, vec3(0.0, 0.0, 1.0));

            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

            gl_FragColor = vec4(atmosphere + texture2D(uTexture, vUv).xyz, 1.0);
        }
    `
);

const AtmosphereShaderMaterial = shaderMaterial(

    //uniform
    {},

    //Vertex Shader
    glsl`
        
        varying vec3 vertexNormal;
        
        void main() {
            vertexNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,

    //Fragment Shader
    glsl`
    
        varying vec3 vertexNormal;

        void main() {
            float intensity = pow(0.8 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);

            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
    `
);


extend({PlanetShaderMaterial, AtmosphereShaderMaterial});

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

const Particles = () => {

    const textureLoader = new THREE.TextureLoader()

    const particleTexture = textureLoader.load('/textures/particles/8.png')
  
    const count = 10000;
  
      const [positions, colors] = useMemo(() => {
  
        const positions = []
        const colors = []
  
        for (let i = 0; i < count; i++) {

          positions[i] = (Math.random() - 0.5) * 100;
          colors[i] = Math.random()

        }
        
        return [new Float32Array(positions), new Float32Array(colors)]

      }, [])
  
      return (

        <points >

          <bufferGeometry attach="geometry">

            <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
            <bufferAttribute attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} />

          </bufferGeometry>

          <pointsMaterial attach="material" vertexColors size={0.1} sizeAttenuation={true} alphaMap={particleTexture} alphaTest={0.001} transparent={true}/>

        </points>

      )
}

const Sphere = ({size}) => {

    const mesh = useRef();

    useFrame(({mouse}) => {

        const x = (mouse.x * window.innerWidth * 0.001) / 2
        const y = (mouse.y * window.innerHeight * 0.001) / 2
        mesh.current.rotation.set(-y, x, 0)    

    })

    return (

        <mesh ref={mesh}>

            <sphereGeometry
                args={[size, 50, 50]}
            />
            <planetShaderMaterial
            uTexture={earthMap}
            />
            
        </mesh>
    )
}
const Atmosphere = ({size}) => {    

    return (

        <mesh scale={[1.1, 1.1, 1.1]}>

            <sphereGeometry
                args={[size, 50, 50]}
            />
            <atmosphereShaderMaterial
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            />
            
        </mesh>
    )
}

const Earth = () => {

    const { 

        sizeOne,
        rotationSpeedOne

     } = useControls('Control Panel', { 

        Earth: folder({

            sizeOne: {value: 5, min: 1, max: 10, step: 0.001, label: 'Size'},
            rotationSpeedOne: {value: 0.005, min: 0.001, max: 1, step: 0.001, label: 'Speed'}

        })
    })

    const earth = useRef();

    useFrame(() => {

        earth.current.rotation.y += rotationSpeedOne 

    })

    return (
    
      <mesh ref={earth}>

          <Sphere size={sizeOne}/>
          <Atmosphere size={sizeOne}/>

      </mesh>
      
  );
}

const Space = () => {
 
    return (

        <div className='project'>

            <div className='pageTitle'>
                <h1 style={{color: '#ffffff'}}>{Animation3DArray[5].name}</h1>
            </div>

            <Canvas style={{backgroundColor: '#000000'}} camera={{ position: [0, 0, 20] }}>

                <ambientLight intensity={0} />

                <Controls />  

                <Earth/>

                <Particles />

            </Canvas>

            <Leva collapsed={true}/>

            <Info title={Animation3DArray[5].name} repoAddress={Animation3DArray[5].repo} text={Animation3DArray[5].description} />
            
        </div>
  );
}

export default Space