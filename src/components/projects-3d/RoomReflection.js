import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useControls, folder, Leva } from 'leva';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';


extend({ OrbitControls });

const CameraControls = () => {

  const {

    camera,
    gl: { domElement }

  } = useThree();

  const controls = useRef();

  useFrame(() => controls.current.update());

  return (

    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />

  );

};

function SkyBox() {
  
  const { scene } = useThree();
  
  const loader = new CubeTextureLoader();
  
  const texture = loader.load([

    "/textures/nebular/front.png",
    "/textures/nebular/back.png",
    "/textures/nebular/top.png",
    "/textures/nebular/bottom.png",
    "/textures/nebular/right.png",
    "/textures/nebular/left.png"

  ]);

  scene.background = texture;

  return null;
}

function Sphere() {
  
  const { 

    sizeOne

    } = useControls('Control Panel', { 

    Sphere: folder({

      sizeOne: {value: 1.25, min: 0, max: 5, step: 0.001, label: 'Size'}

    })

  })

  const { scene, gl } = useThree();

  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {

    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter

  });

  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);

  cubeCamera.position.set(0, 0, 0);

  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene));

  return (

    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>

      <ambientLight intensity={0.5} />

      <sphereGeometry attach="geometry" args={[sizeOne, 32, 32]} />

      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />

    </mesh>

  );

}

function App() {

  return (

    <div className='project'>

      <div className='pageTitle'>
        <h1 style={{color: '#ffffff'}}>{Animation3DArray[4].name}</h1>
      </div>

      <Canvas className="canvas">

        <CameraControls />
        <Sphere />
        <SkyBox />

      </Canvas>

      <Leva collapsed={true}/>

      <Info text={Animation3DArray[4].description} />

    </div>  

  );
  
}

export default App;
