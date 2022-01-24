import * as THREE from 'three';
import React, { useRef, useMemo} from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import noise, { perlin3 } from '../../utilities/noise';
import Animation3DArray from '../database/Animation3DArray';
import Info from '../parts/Info';
import { useControls, folder, Leva } from 'leva';

const MeshAimation = ({
  position,
  rotation,
  grid: {
    width,
    height,
    sep
  }, 
  colorOfXYZT,
  zOfXYT,
  anim: {
    init,
    update
  }
}) => {

  let t = init;

  let { positions, colors, normals } = useMemo(() => {
    let positions = [], colors = [], normals = []

    for (let yi = 0; yi < height; yi++){
      for (let xi = 0; xi < width; xi++){
        let x = sep * (xi-(width - 1) / 2.);
        let y = sep * (yi-(height - 1) / 2.);
        let z = zOfXYT(x, y, t);
        positions.push(x, y, z);

        let color = colorOfXYZT(x, y, z, t)

        colors.push(color.r, color.g, color.b);
        normals.push(0, 0, 1);
      }
    }
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals)
    }
  }, [width, height, sep, zOfXYT, colorOfXYZT, t])
  
  //index buffer
  let indices = useMemo(() => {
    let indices = []
    let i = 0;
    for (let yi = 0; yi < height - 1; yi++){
      for (let xi = 0; xi < width - 1; xi++) {
        indices.push(i, i + 1, i + width + 1)
        indices.push(i + width + 1, i + width, i)
        i++
      }
      i++
    }
    return new Uint16Array(indices)
  }, [width, height])

  //animation
  let posRef = useRef(), colorRef = useRef()

  useFrame(() => {
    t = update(t);

    const positions = posRef.current.array, colors = colorRef.current.array

    let i = 0;

    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++){
        positions[i + 2] = zOfXYT(positions[i], positions[i + 1], t);
        let c = colorOfXYZT(positions[i], positions[i + 1], positions[i + 2], t);
        colors[i] = c.r;
        colors[i + 1] = c.g;
        colors[i + 2] = c.b;

        i += 3;
      }
    }

    posRef.current.needsUpdate = true;
    colorRef.current.needsUpdate = true;
  })

  return (
    <mesh 
      position={position}
      rotation={rotation}
    >
      <bufferGeometry>

        <bufferAttribute 
          ref={posRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />

        <bufferAttribute 
          ref={colorRef}
          attachObject={['attributes', 'color']}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />

        <bufferAttribute
          attachObject={['attributes', 'normal']}
          array={normals}
          count={normals.length / 3}
          itemSize={3}
        />

        <bufferAttribute 
          attach='index'
          array={indices}
          count={indices.length}
        />

      </bufferGeometry>
      <meshStandardMaterial 
        vertexColors
        side={THREE.DoubleSide}
        wireframe={false}
      />
    </mesh>
  )
}

const AnimationCanvas = () => {
  
  const seed = Math.floor(Math.random() * (2**16))
  noise.seed(seed)

  const { 

    backgroundColor,
    lavaScale, 
    lavaOctaves,
    lavaPersistence,
    lavaLacunarity, 
    lavaAmplitude,
    lavaFrequency

 } = useControls('Control Panel', { 

    backgroundColor: { value: '#ffffff', label: 'Background Color'},

    Lava: folder({

        lavaScale: {value: 8, min: 1, max: 10, step: 0.01, label: 'Scale'},
        lavaOctaves: {value: 20, min: 1, max: 30, step: 0.01, label: 'Octaves'},
        lavaPersistence: {value: 0.6, min: 0.1, max: 1, step: 0.01, label: 'Persistence'},
        lavaLacunarity: {value: 2, min: 0.1, max: 3, step: 0.01, label: 'Lacunarity'},
        lavaAmplitude: {value: 1, min: 0.1, max: 2, step: 0.01, label: 'Amplitude'},
        lavaFrequency: {value: 1, min: 0.1, max: 2, step: 0.01, label: 'Frequency'}
    })
})

  const sampleNoise = (x, y, z) =>{
    let scale = 1/lavaScale;
    let octaves = lavaOctaves;
    let persistence = lavaPersistence;
    let lacunarity = lavaLacunarity;

    let amp = lavaAmplitude;
    let freq = lavaFrequency;

    let value = 0;

    for(let i = 0; i < octaves; i++) {
      value += amp*perlin3(x * freq * scale, y * freq * scale, z);
      amp *= persistence;
      freq *= lacunarity;
    }

    return value
  }

  const zOfXYT = (x, y, t) => {
    return sampleNoise(x, y, t)
  }

  const colorOfXYZT = (x, y, z, t) => {
    return {
      r: z,
      g: z/5,
      b: Math.sqrt(x ** 2 + y ** 2)/75
    }
  }
  return (
    <Canvas camera={{position: [0, 2, 10], fov: 75}} style={{backgroundColor: backgroundColor}} >
      <ambientLight />
      <MeshAimation
        position={[0, 0, 0]}
        rotation={[-Math.PI/2, 0, 0]}
        grid={{
          width: 100,
          height: 100,
          sep: 0.2
        }}
        zOfXYT={zOfXYT}
        colorOfXYZT={colorOfXYZT}
        anim={{
          init: 0,
          update: (t) => t + 0.002
        }}
      />
    </Canvas>
  )
}


const LavaField = () => {
  return (
    <div className='project' >
        <div className='pageTitle'>
                <h1 style={{color: '#000000'}}>{Animation3DArray[8].name}</h1>
        </div>
        <AnimationCanvas />
        <Leva collapsed={true}/>

        <Info title={Animation3DArray[8].name} repoAddress={Animation3DArray[8].repo} text={Animation3DArray[8].description} />
    </div>
  )
}

export default LavaField;