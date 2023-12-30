import BWImg from '../../assets/images/tileImages/BoxWobble.jpg';
import FAImg from '../../assets/images/tileImages/FoxAnimate.jpg';
import ISImg from '../../assets/images/tileImages/SpinningBall.jpg';
import PSImg from '../../assets/images/tileImages/ParticleSystem.jpg';
import PWImg from '../../assets/images/tileImages/ParticleWaves.jpg';
import RRImg from '../../assets/images/tileImages/Reflection.jpg';
import SImg from '../../assets/images/tileImages/Space.jpg';
import TImg from '../../assets/images/tileImages/Terrain.jpg';
import SMImg from '../../assets/images/tileImages/ShaderMaterial.jpg';
import LFImg from '../../assets/images/tileImages/LavaField.jpg';

let Animation3DArray = [
    {
        id: 0,
        name: 'Box Wobble',
        path: '/animation-3d/box-wobble',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/BoxWobble.js',
        image: BWImg,
        description: `<p>The code defines a React component named BoxWobble that creates an interactive 3D scene using the Three.js library and Leva for a control panel. The scene consists of three wobbling boxes with dynamic properties such as color, wobble speed, position, and rotation speed, all adjustable through the Leva control panel.</p>
                    <p>The Leva control panel allows users to customize the background color and properties of each box individually, facilitating real-time adjustments. Each box responds to clicks, triggering a wobbling animation and altering its scale. The 3D scene includes lighting, shadows, and an orbit control for interactive navigation.</p>
                    <p>This component encapsulates a visually engaging and interactive 3D environment with easily adjustable parameters, showcasing the power of Three.js and Leva for creating immersive web experiences.</p>`
    },
    {
        id: 1,
        name: 'Animated Fox',
        path: '/animation-3d/animated-fox',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/FoxAnimate.js',
        image: FAImg,
        description: `<p>The provided code is a React component that renders a 3D animation using the Three.js library. It loads a 3D model of a fox from a GLTF file, incorporating animation sequences. The Leva library is utilized for a control panel that allows dynamic adjustments to the fox's position, scale, and animation state. The animations are managed through a Three.js AnimationMixer, enabling the selection and playback of different animation states.</p>
                    <p>The component includes an orbit control system for user interaction, enabling rotation and zooming within the 3D scene. The canvas also features ambient and spot lighting, as well as a colored plane representing the ground. The code structure promotes modularity, with separate components for the fox model, control system, and background plane. Additionally, there's an information panel displaying details about the specific 3D animation being presented. The overall design aims to create an interactive and visually engaging 3D experience within a React application.</p>`
    },
    {
        id: 2,
        name: 'Spinning Ball',
        path: '/animation-3d/spinning-ball',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/SpinningBall.js',
        image: ISImg,
        description: `<p>The code represents a React component that creates an interactive 3D scene using the Three.js library. It features a rotating sphere, controlled by a Leva-powered panel allowing adjustments to color, material properties, position, and rotation speed. The sphere has a dynamic texture, and its rotation responds to user interactions. The scene includes point and spot lights, each configurable through the Leva control panel for properties like color, intensity, and position. Additionally, there's a text element with customizable color and size that dynamically adjusts to the window's dimensions. The component incorporates event handling for canvas resizing and leverages Three.js features like shadows. Overall, it provides an engaging and visually appealing 3D experience with interactive elements and dynamic controls.</p>`
    },
    {
        id: 3,
        name: 'Particle System',
        path: '/animation-3d/particle-system',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/ParticleSystem.js',
        image: PSImg,
        description: `<p>In this 3D animation, a particle system and a torus are created using React and the Three.js library. The particle system comprises 10,000 points with randomly generated x, y, and z coordinates, implemented through a for loop and the formula (Math.random() - 0.5) * 15. The Leva control panel enables dynamic adjustments to properties such as rotation speed, size, and color for both the particle system and the torus. A texture loader applies a cross image to each particle. The torus is represented using point material, highlighting its skeletal structure. The background color of the scene is also customizable through Leva. This project showcases the versatility of Three.js and the interactivity facilitated by Leva, allowing users to experiment with various visual parameters and create engaging 3D visualizations.</p>`
    },
    {
        id: 4,
        name: 'Particle Wave',
        path: '/animation-3d/particle-wave',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/ParticleWaves.js',
        image: PWImg,
        description: `<p>The code represents a React component creating a visually captivating 3D animation called "ParticleWaves" using the Three.js library. It features a dynamic particle system forming a wave-like pattern in a canvas. The Leva control panel facilitates real-time adjustments to parameters like amplitude, frequency, and period, influencing the appearance of the particle wave. The particle positions are computed based on a mathematical function, producing a dynamic and visually appealing effect. The animation is complemented by an orbit control system, allowing users to interactively explore the scene. The canvas incorporates ambient lighting, enhancing the overall visual experience. The code structure demonstrates the seamless integration of Three.js and Leva for creating interactive and customizable 3D visualizations. The project showcases the versatility of React and Three.js in producing engaging and dynamic visual content.</p>`
    },
    {
        id: 5,
        name: 'Room Reflection',
        path: '/animation-3d/room-reflection',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/RoomReflection.js',
        image: RRImg,
        description: `<p>
        The code defines a React component named "App" that creates a 3D scene using the Three.js library. The scene includes a rotating sphere rendered with realistic reflections using a CubeCamera and a textured skybox. The camera controls, powered by OrbitControls, enable user interaction, allowing rotation of the scene. Leva is integrated to provide a control panel, allowing dynamic adjustment of the sphere's size. The component is organized with modularity in mind, encapsulating camera controls, sphere rendering, and the skybox in separate functions. The overall setup showcases the use of various Three.js features, such as CubeCamera for reflections, ambient lighting, and a responsive control panel, providing an interactive and visually appealing 3D experience. The project is well-structured, emphasizing flexibility and ease of customization for creating diverse 3D visualizations.</p>`
    },
    {
        id: 6,
        name: 'Space',
        path: '/animation-3d/space',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/Space.js',
        image: SImg,
        description: `<p>The provided code defines a React component named "Space" that creates a visually stunning 3D space scene using the Three.js library. The scene comprises a rotating Earth-like sphere with a dynamic atmosphere, particles representing stars, and an interactive camera controlled by OrbitControls. The Earth sphere is composed of a realistic texture map, and its rotation speed can be adjusted in real-time using the Leva control panel. Additionally, the particles simulate a star field, creating a sense of depth and immersion. The code utilizes shader materials for both the Earth and its atmosphere, enhancing the visual appeal of the celestial body. The overall setup showcases the capabilities of Three.js, providing an engaging and aesthetically pleasing 3D space environment with customizable parameters for interactive exploration.</p>`
    },
    {
        id: 7,
        name: 'Terrain',
        path: '/animation-3d/terrain',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/Terrain.js',
        image: TImg,
        description: `<p>The provided React component, named "Terrain," creates an interactive 3D terrain visualization using the Three.js library. The scene consists of a textured plane representing the terrain, which is manipulated through customizable controls. The Leva control panel allows real-time adjustments to parameters such as the terrain's width, depth, and color. The terrain is textured with an image loaded using a TextureLoader, and a displacement map is applied for added realism, creating height variations. The scene is illuminated by ambient and spotlighting, and shadows are enabled for a more immersive effect. The camera is controlled using OrbitControls, allowing users to explore the terrain from different perspectives. The background color of the scene is also customizable through Leva. Overall, the code showcases the versatility of Three.js in creating dynamic and interactive 3D terrain visualizations with user-configurable parameters.</p>`
    },
    {
        id: 8,
        name: 'Shader Material',
        path: '/animation-3d/shader-material',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/ShaderMaterial.js',
        image: SMImg,
        description: `<p>
        The provided React component, "ShaderMaterial," creates an interactive 3D scene using Three.js and WebGL shaders. It features a customizable waving plane that dynamically deforms based on simplex noise in the vertex shader. The shader includes uniform variables for time, color, and a texture, allowing for real-time manipulation through the Leva control panel. The size and the number of pieces of the plane are also adjustable parameters. The scene is rendered within a Canvas component, with a specified background color. The code demonstrates the power of shaders in creating visually engaging and interactive graphics, providing users with a dynamic experience. The project title, repository link, and description are displayed using the Info component, enhancing the overall presentation and providing context for the creative use of shaders in the scene.</p>`
    },
    {
        id: 9,
        name: 'Lava Field',
        path: '/animation-3d/lava-field',
        repo: 'https://github.com/raj-randev/portfolio/blob/main/src/components/projects-3d/LavaField.js',
        image: LFImg,
        description: `<p>The React component "LavaField" generates a visually engaging lava field simulation using Three.js and WebGL. The lava field is created with a customizable grid of mesh animations that deform dynamically based on Perlin noise. The Leva control panel allows users to interactively adjust parameters such as background color and the characteristics of the lava noise, including scale, octaves, persistence, lacunarity, amplitude, and frequency. The animation canvas utilizes Perlin noise functions to sample noise for generating the z-coordinate of each point on the grid. The color of each point is determined based on its coordinates, providing a visually appealing representation of the lava field. The project title, repository link, and description are displayed using the Info component, providing context and enhancing the overall presentation of the lava field simulation.</p>`
    }
]
export default Animation3DArray;