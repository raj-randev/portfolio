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
        image: BWImg,
        description: 'This 3d animation consists of 3 cuboids. Using MeshWobbleMaterial from @react-three/drei, I’ve added a wobble to all the cuboids. Along with the wobble, there is a rotation applied to the x and y axis of 0.01. With the use of useSpring from @react-three/fiber, each cuboid grows in scale by 1.4 on mouse click. The Leva control panel on the side will allow you to change some of the Propeties to this canvas animation. '
    },
    /*{
        id: 1,
        name: 'Animated Fox',
        path: '/animation-3d/animated-fox',
        image: FAImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },*/
    {
        id: 2,
        name: 'Spinning Ball',
        path: '/animation-3d/spinning-ball',
        image: ISImg,
        description: 'This 3d animation consists of a sphere and title. The sphere texture is made by using a texture loader and placing it on the material using the normalMap property. This texture produces shadows within the crevasses whilst light is pointed towards it. There are 2 lights being used in the scene. A spotlight and a pointLight that use a red and blue light. All the properties for the sphere, lights and font can be editing in the Leva control panel.'
    },
    {
        id: 3,
        name: 'Particle System',
        path: '/animation-3d/particle-system',
        image: PSImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 4,
        name: 'Particle Wave',
        path: '/animation-3d/particle-wave',
        image: PWImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 5,
        name: 'Room Reflection',
        path: '/animation-3d/room-reflection',
        image: RRImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 6,
        name: 'Space',
        path: '/animation-3d/space',
        image: SImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 7,
        name: 'Terrain',
        path: '/animation-3d/terrain',
        image: TImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    }
]
export default Animation3DArray;