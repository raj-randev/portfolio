import React, { useState, useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';
import { Canvas } from '@react-three/fiber'; // Import Canvas from @react-three/fiber
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls
//import MODEL from './models-3d/Fox.glb';
import * as THREE from 'three';

extend({ OrbitControls });

const MODEL = process.env.PUBLIC_URL + '/Fox.glb';

const FoxBody = () => {
    const { foxScale, foxPositionX, foxPositionZ, animationState } = useControls('Control Panel', {
        Fox: folder({
            foxPositionX: { value: 0, min: -200, max: 200, step: 1, label: 'Position X' },
            foxPositionZ: { value: 0, min: -200, max: 200, step: 1, label: 'Position Z' },
            foxScale: { value: 0.02, min: 0.01, max: 2, step: 0.01, label: 'Scale' },
            animationState: { value: 'default', options: ['default', 'animation1', 'animation2'], label: 'Animation State' },
        }),
    });

    const [model, setModel] = useState();
    const mixer = useRef();

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(MODEL, 
            (gltf) => {
                setModel(gltf);
    
                console.log('Loaded GLB:', MODEL);

                // Check if the model has animations
                if (gltf.animations && gltf.animations.length > 0) {
                    mixer.current = new THREE.AnimationMixer(gltf.scene);
    
                    // Assuming animations are in the order: no movement, animation1, animation2
                    const actionDefault = mixer.current.clipAction(gltf.animations[0]);
                    const actionAnimation1 = mixer.current.clipAction(gltf.animations[1]);
                    const actionAnimation2 = mixer.current.clipAction(gltf.animations[2]);
    
                    // Store the actions in a map for easy reference
                    const actionsMap = {
                        default: actionDefault,
                        animation1: actionAnimation1,
                        animation2: actionAnimation2,
                    };
    
                    // Play the default animation initially
                    actionsMap.default.play();
                }
            },
            (xhr) => {
                // Loading progress callback
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('Error loading GLTF model:', error);
            }
        );
    }, [setModel]);
    
    

    useEffect(() => {
        // Update animation based on the selected state
        if (mixer.current && model && model.animations && model.scene) {
            const animationsByName = {};
    
            // Map animations by name for easier lookup
            model.animations.forEach((anim) => {
                animationsByName[anim.name] = anim;
            });
    
            const animationToPlay = animationsByName[animationState];
    
            if (animationToPlay) {
                // Stop all current animations
                mixer.current.stopAllAction();
    
                // Play the selected animation
                const action = mixer.current.clipAction(animationToPlay);
                if (action) {
                    action.play();
                }
            }
        }
    }, [animationState, model]);    

    useFrame((state, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return model && model.scene ? (
        <primitive object={model.scene} position={[foxPositionX, 0, foxPositionZ]} scale={foxScale} />
    ) : null;
};


const Controls = () => {
    const { camera, gl } = useThree();
    const orbitRef = useRef();

    useFrame(() => {
        orbitRef.current.update();
    });

    return (
        <orbitControls
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    );
};

const Plane = () => {
    const { planeColor } = useControls('Control Panel', {
        planeColor: { value: '#000000', label: 'Background Color' },
    });

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshPhysicalMaterial attach="material" color={planeColor} />
        </mesh>
    );
};

const FoxAnimate = () => {
    return (
        <div className="project">
            <div className="pageTitle">
                <h1 style={{ color: '#ffffff' }}>{Animation3DArray[1].name}</h1>
            </div>
            <Canvas
                camera={{ position: [-3, 0, 4] }}
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFShadowMap; // Use THREE directly, assuming THREE has been imported
                }}
                width="100%"
                height="100%"
            >
                <ambientLight />
                <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
                <Controls />
                <FoxBody />
                <Plane />
            </Canvas>
            <Leva collapsed={true} />
            <Info
                title={Animation3DArray[1].name}
                repoAddress={Animation3DArray[1].repo}
                text={Animation3DArray[1].description}
            />
        </div>
    );
};

export default FoxAnimate;
