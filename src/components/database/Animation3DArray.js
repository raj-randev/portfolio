import BWImg from '../../assets/images/tileImages/BoxWobble.jpg';
//import FAImg from '../../assets/images/tileImages/FoxAnimate.jpg';
import ISImg from '../../assets/images/tileImages/SpinningBall.jpg';
import PSImg from '../../assets/images/tileImages/ParticleSystem.jpg';
import PWImg from '../../assets/images/tileImages/ParticleWaves.jpg';
import RRImg from '../../assets/images/tileImages/Reflection.jpg';
import SImg from '../../assets/images/tileImages/Space.jpg';
import TImg from '../../assets/images/tileImages/Terrain.jpg';

let Animation3DArray = [
    {
        id: 0,
        name: 'Box Wobble',
        path: '/animation-3d/box-wobble',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/BoxWobble.js',
        image: BWImg,
        description: '<p>This 3d animation consists of 3 cuboids. Using MeshWobbleMaterial from @react-three/drei, I’ve added a wobble to all the cuboids. Along with the wobble, there is a rotation applied to the x and y axis of 0.01. With the use of useSpring from @react-three/fiber, each cuboid grows in scale by 1.4 on mouse click. The Leva control panel on the side will allow you to change some of the Propeties to this canvas animation.</p>'
    },
    /*{
        id: 1,
        name: 'Animated Fox',
        path: '/animation-3d/animated-fox',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/FoxAnimate.js',
        image: FAImg,
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.</p>'
    },*/
    {
        id: 2,
        name: 'Spinning Ball',
        path: '/animation-3d/spinning-ball',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/SpinningBall.js',
        image: ISImg,
        description: '<p>This 3d animation consists of a sphere and title. The sphere texture is made by using a texture loader and placing it on the material using the normalMap property. This texture produces shadows within the crevasses whilst light is pointed towards it. There are 2 lights being used in the scene. A spotlight and a pointLight that use a red and blue light. All the properties for the sphere, lights and font can be editing in the Leva control panel.</p>'
    },
    {
        id: 3,
        name: 'Particle System',
        path: '/animation-3d/particle-system',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/ParticleSystem.js',
        image: PSImg,
        description: '<p>For this 3d animation, I have created a particle system and a torus. The particle system consists of 10,000 points that all require an x, y and z coordinate. These coordinates are set for the position of the bufferAttribute by stating the itemSize to equal 3. It is then run through a for loop 10,000 times using the { (Math.random() - 0.5) * 15 } to produce random positions in all 3 dimensions. A texture loader is used to apply a cross image to each point. A torus is also added to the scene and I have used pointMaterial to show the skeleton of the shape. All the properties of the torus, particle system and background can be modified using the Leva control panel.</p>'
    },
    {
        id: 4,
        name: 'Particle Wave',
        path: '/animation-3d/particle-wave',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/ParticleWaves.js',
        image: PWImg,
        description: '<p>For this 3d animation, particles are arranged in a layer and move in a wave. The position of each particle is equally distance on the x and z axis. They are animated on the y-axis using the graph function. The graph function includes a period variable, amplitude variable and a frequency variable. These variables give the wave height, length, and speed. All the waves\' properties can be modified using the Leva control panel.</p>'
    },
    {
        id: 5,
        name: 'Room Reflection',
        path: '/animation-3d/room-reflection',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/RoomReflection.js',
        image: RRImg,
        description: '<p>For this 3d animation, there is a reflective sphere in the middle of the scene and a skybox with an environment surrounding it. The skybox requires a texture loader to load 6 sides of the cube. The sphere uses a meshBasicMaterial with an envMap of cubeCamera. This gives the surface the capability of reflecting the environment around it. The size of the sphere can be changed using the Leva control panel.</p>'
    },
    {
        id: 6,
        name: 'Space',
        path: '/animation-3d/space',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/Space.js',
        image: SImg,
        description: '<p>For this 3d animation, I have created a particle and a sphere in the middle of the scene. I have used a vertex shader to apply a UV map of planet earth to the uTexture of the material. I have used a second vertex shader to create an atmosphere and set its scale to 1.1 times the size of the original sphere. This gives the planet a glow. The earth sphere reacts to the movement of the mouse. The size and speed of the earth can be controlled by the Leva panel in the top righthand corner.</p>'
    },
    {
        id: 7,
        name: 'Terrain',
        path: '/animation-3d/terrain',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/Terrain.js',
        image: TImg,
        description: '<p>For this 3d animation, I have used a few texture loaders to load the bird’s eye image of a mountain range on to a planeBufferGeometry. I have used a meshStandardmaterial and set its displacementMap property to the other texture loaded. This gives the birds’ eye map depth in the y-axis and gives the plane a 3d feel. The width, depth and color can be controlled by the Leva control panel in the righthand corner.</p>'
    }
]
export default Animation3DArray;