import BDImg from '../../assets/images/tileImages/BouncingDots.jpg';
import GImg from '../../assets/images/tileImages/Gravity.jpg';
import FSImg from '../../assets/images/tileImages/FallingStar.jpg';
import CSImg from '../../assets/images/tileImages/CircularSpins.jpg';
import CDImg from '../../assets/images/tileImages/CollisionDetector.jpg';
import GSImg from '../../assets/images/tileImages/GalacticSwirl.jpg';
import IBImg from '../../assets/images/tileImages/InteractiveBalls.jpg';
import RPImg from '../../assets/images/tileImages/RainbowParticles.jpg';
import RPPImg from '../../assets/images/tileImages/RepelParticles.jpg';
import SWImg from '../../assets/images/tileImages/SinWaves.jpg';
import PWImg from '../../assets/images/tileImages/ParticleWeb.jpg';

let Animation2DArray = [
    {
        id: 0,
        name: 'Red Blood Cells',
        path: '/animation-2d/red-blood-cells',
        repo: 'https://github.com/raj-randev/Red-Blood-Cells',
        image: BDImg,
        description: `<p>The animation is achieved by updating the position of each circle in the animate function. Particularly, the this.update method within the Circle class ensures that each circle (blood cell) bounces off the canvas edges when reaching them. The code segment you highlighted controls the circular motion, reversing the velocity (dx and dy) of a blood cell when it hits the canvas boundaries. The cells move smoothly, responding to the environment's edges and updating their positions based on their velocity and the specified circleVelocity. The draw method visualizes the circles on the canvas, creating a dynamic and visually appealing simulation of red blood cells in motion.</p>`
    },
    {
        id: 1,
        name: 'Gravity',
        path: '/animation-2d/gravity',
        repo: 'https://github.com/raj-randev/Gravity',
        image: GImg,
        description: `<p>The "Gravity" animation creates an engaging visual experience with bouncing balls influenced by gravity and friction. The Leva library is utilized for an interactive control panel to tweak various parameters in real-time. The canvas adapts to the window size, and users can click to reinitialize the animation.</p>
                    <p>The critical section, this.update, governs the ball's motion. The up-and-down movement is controlled by gravity, impacting the ball's ascent and descent. Upon hitting the canvas bottom, the ball's upward velocity is reversed and reduced, simulating a bounce with diminishing height. The side-to-side movement is influenced by friction, gradually slowing down the ball's horizontal speed. Additionally, if the ball hits the canvas boundaries horizontally, its direction is reversed, creating a bouncing effect.</p>
                    <p>The animation features colorful balls, with parameters like the number of circles, maximum radius, gravity strength, and friction factor adjustable via the Leva control panel. Notably, the Leva collapse state dynamically adapts based on window width, enhancing the user experience for different screen sizes.</p>`,
    },
    {
        id: 2,
        name: 'Falling Star',
        path: '/animation-2d/falling-star',
        repo: 'https://github.com/raj-randev/falling-star',
        image: FSImg,
        description: `<p>The provided React code creates an animated falling star simulation using HTML5 Canvas. The FallingStar component initializes a canvas and renders a dynamic scene featuring a night sky with shooting stars, mountains, and a ground. The canvas adjusts to window resizing, and the stars exhibit realistic behaviors such as shattering upon reaching the ground.</p>
                    <p>The animation is achieved through the Star class, representing large shooting stars, and the MiniStar class, representing smaller fragments created upon star shattering. The stars move with a combination of gravity and friction, creating a visually appealing effect. The background includes a gradient to simulate a night sky, and there are randomly generated background stars for added realism.</p>
                    <p>The createMountainRange function draws mountain ranges of varying heights and colors, contributing to the overall scenic landscape. The initialization function (init) populates the scene with a predefined number of stars, mini stars, and background stars.</p>
                    <p>The project title, description, and a link to the repository are displayed above the canvas. The code utilizes event listeners for window resizing to ensure responsiveness. Overall, the code provides an engaging and visually captivating simulation of falling stars against a night sky.</p>`
    },
    {
        id: 3,
        name: 'Circular Spins',
        path: '/animation-2d/circular-spins',
        repo: 'https://github.com/raj-randev/Circular-Spins',
        image: CSImg,
        description: `<p>The "CircularSpins" animation creates an immersive visual display of gracefully orbiting particles on a canvas. Utilizing React and the Leva library for dynamic parameter control, the animation adapts to various screen sizes, offering an interactive and engaging experience.</p>
                    <p>The crucial section, this.update, orchestrates the circular motion of each particle. The radians attribute is manipulated by the velocity, introducing circular movement. Smoothing functions are applied to enhance the particle's motion on both the x-axis and y-axis. The lastMouse object records the previous mouse position, and the particle's current position is calculated based on these parameters. The resulting effect is a mesmerizing pattern of particles orbiting a central point.</p>
                    <p>The Leva control panel allows users to customize particle colors, providing a dynamic and visually appealing aspect to the animation. The collapse state of the Leva panel dynamically adjusts based on the window width, ensuring optimal user experience across different devices.</p>`
    },
    {
        id: 4,
        name: 'Collison Detector',
        path: '/animation-2d/collision-detector',
        repo: 'https://github.com/raj-randev/Collision-Detector',
        image: CDImg,
        description: `<p>The "CollisionDetector" animation demonstrates a mesmerizing particle simulation with collision detection and resolution on a dynamic canvas. Leveraging React and the Leva library for real-time parameter adjustments, this interactive experience adapts to diverse screen sizes.</p>
                    <p>The heart of the code lies in the resolveCollision function, which meticulously handles particle collisions. By calculating the velocity differences and distances between colliding particles, the function ensures a realistic bounce effect. It employs vector rotations to compute the final velocities after the collision, preventing particle overlap and simulating an accurate collision response.</p>
                    <p>The Leva control panel empowers users to customize the animation by adjusting background color, particle colors, and essential parameters like the number of particles, particle radius, and mass. The panel dynamically collapses on smaller screens, optimizing user interaction.</p>
                    <p>The animation is enriched with visual details such as color transitions on hover and boundary reflections, creating a captivating and responsive particle playground.</p>`
    },
    {
        id: 5,
        name: 'Galactic Swirl',
        path: '/animation-2d/galactic-swirl',
        repo: 'https://github.com/raj-randev/Galactic-Swirl',
        image: GSImg,
        description: `<p>The "GalacticSwirl" animation is a visually stunning celestial display, where particles gracefully orbit a central point, creating a mesmerizing galactic effect. Built with React and enhanced by the Leva library for dynamic parameter adjustments, this interactive experience responds to user input.</p>
                    <p>The code features a distinctive interaction where holding down the mouse click initiates a captivating effect. The mouseDown and mouseRelease functions precisely handle this interaction. When the mouse is pressed, the animation enters a dynamic state, altering the background rotation and introducing a trail effect. Upon releasing the mouse, the animation gracefully returns to its original state, smoothly fading out the trail.</p>
                    <p>The Leva control panel empowers users to customize the animation by adjusting background color and particle colors, offering an engaging and interactive exploration of the galactic swirl. The animation's fluidity and responsiveness make it an immersive visual journey, capturing the essence of a cosmic dance.</p>`
    },
    {
        id: 6,
        name: 'Interactive Balls',
        path: '/animation-2d/interactive-balls',
        repo: 'https://github.com/raj-randev/Interactive-Balls',
        image: IBImg,
        description: `<p>The "InteractiveBalls" component creates an animated canvas with interactive circles. The Leva library is used for easy parameter adjustments. The circles grow when the mouse is near and shrink when the mouse moves away.</p>
                    <p>The code utilizes React, Leva for controls, and HTML canvas for rendering. It maintains an array of circles with random sizes, velocities, and colors. The animation responds to window resizing, ensuring it adapts to various screen sizes.</p>
                    <p>The crucial logic lies in the circle's update method, specifically the condition checking the proximity of the mouse to each circle</p>
                    <p>This code segment checks if the mouse is within a certain range of a circle. If true, and the circle's radius is below a maximum growth limit (maxRadiusGrowth), the radius increases, creating a visual effect of the circle expanding. If false and the circle's radius is above its minimum allowed size (minRadius), the radius decreases, simulating a shrinkage effect.</p>
                    <p>This interactive behavior provides an engaging user experience, allowing users to influence the visual elements on the canvas by moving their mouse.</p>`
    },
    {
        id: 7,
        name: 'Rainbow Particles',
        path: '/animation-2d/rainbow-particles',
        repo: 'https://github.com/raj-randev/Rainbow-Particles',
        image: RPImg,
        description: '<p>For this 2d animation, particles are created either with mouse movement or on a mouse click. 5 particles are created on each click and 2 particles are created each time the mouse moves. The particle size is determined by the equation <span class="code whiteFont blackBackground">{ <span class="lightBlueFont">Math</span>.<span class="yellowFont">random</span>() * <span class="lightGreenFont">15</span> + <span class="lightGreenFont">1</span>;}</span>, as a result, the particle size ranges between 1 and 15 px. The movement of each particle is determined by the equation <span class="code whiteFont blackBackground">{ <span class="lightBlueFont">Math</span>.<span class="yellowFont">random</span>() * <span class="lightGreenFont">3</span> - <span class="lightGreenFont">1.5</span>; }</span>, as a result, the x and y movements are random in all directions. The colour of the particles changes because the HSL value has been concatenated and a variable is used for the Hue value. The Hue variable is determined by the equation <span class="code whiteFont blackBackground">{ <span class="lightBlueFont">hue</span> += <span class="lightGreenFont">0.5</span>; }</span>, as a result, the colour smoothly changes with every frame of animation. The particles decrease in size with every frame until they are removed from the screen. This is achieved with the equation <span class="code whiteFont blackBackground">{ if (this.<span class="lightBlueFont">size</span> > <span class="lightGreenFont">0.2</span>) this.<span class="lightBlueFont">size</span> -= <span class="lightGreenFont">0.05</span>; }</span>. It states that if the particle is bigger than 0.2px, decrease the size of the particle at a rate of 0.05px. The equation <span class="code whiteFont blackBackground">{ if (particleArray[i].<span class="lightBlueFont">size</span> <= <span class="lightGreenFont">0.3</span>) { <span class="darkBlueFont">particleArray</span>.<span class="yellowFont">splice</span>(<span class="lightBlueFont">i</span>, <span class="lightGreenFont">1</span>); <span class="lightBlueFont">i</span>--; }</span>, instructs the particle to disappear if it’s smaller or equal to 0.3px and is removed from the particle array.  Finally, a line is drawn between each particle if the space between them is smaller than 100px. This is done by figuring out the hypotenuse between 2 points and adding a lineTo with the same colour from the particle class constructor.</p>'
    },
    {
        id: 8,
        name: 'Repel Particles',
        path: '/animation-2d/repel-particles',
        repo: 'https://github.com/raj-randev/Repel-Particles',
        image: RPPImg,
        description: `<p>The "RepelParticles" component creates an interactive canvas where particles are repelled by the mouse cursor. Leva is used for control parameters, and React manages the component lifecycle. The particles are dynamically updated based on the mouse position, adjusting their positions to create a repulsion effect.</p>
                    <p>The key logic is within the update() method of the Particle class.</p>
                    <p>This method calculates the distance between the particle and the mouse cursor, determining the force and direction needed for repulsion. If the particle is within the specified mouse.radius, it adjusts its position away from the mouse cursor. Otherwise, it returns to its original position.</p>
                    <p>This interactive behavior provides a visually engaging and responsive user experience, where particles dynamically respond to the mouse movement, creating a repelling effect on the canvas.</p>`
    },
    {
        id: 9,
        name: 'Sine Waves',
        path: '/animation-2d/sine-waves',
        repo: 'https://github.com/raj-randev/sine-waves',
        image: SWImg,
        description: `<p>The SineWaves component in your React application creates an animated visual representation of sine waves on an HTML canvas. It utilizes the Leva library for a control panel that allows dynamic adjustments to various parameters, enhancing user interactivity. The waves are drawn with a dynamically changing background color, stroke color, and properties such as length, amplitude, and frequency.</p>
                    <p>The useControls hook from Leva provides sliders and color pickers to adjust parameters like background color, alpha transparency, wave length, amplitude, and frequency in real-time. The canvas is resized to match the window dimensions, ensuring a responsive layout.</p>
                    <p>Within the animate function, a sine wave is drawn on the canvas using the Math.sin function, and the color of the wave dynamically changes based on its position. The animation is achieved by continuously updating the canvas in response to the requestAnimationFrame loop, creating smooth and visually appealing sine wave patterns.</p>
                    <p>This component not only showcases an interactive visual effect but also demonstrates the power of Leva for creating a user-friendly control panel to manipulate and experiment with different parameters, making it an engaging and customizable experience for users exploring the sine wave animation.</p>`
    },
    {
        id: 10,
        name: 'Particle Web',
        path: '/animation-2d/particle-web',
        repo: 'https://github.com/raj-randev/Particle-Web',
        image: PWImg,
        description: `<p>The code defines a React component named ParticleWeb, which uses the Leva library for a control panel and renders a canvas displaying an interactive particle system. The particle system consists of randomly generated particles that move around the canvas, and connections are drawn between particles based on their proximity.</p>
                    <p>The Leva library is utilized to provide a control panel with sliders to adjust parameters such as background color, particle color, number of particles, and particle radius.</p>
                    <p>In the connect function, each particle is iterated over, and connections are drawn between particles that are within a certain distance threshold. The opacity of the connections is based on the distance between particles, creating an effect where particles closer together have more visible connections. The color of the connections is determined by the selected particle color from the Leva control panel.</p>
                    <p>The particle system responds to mouse movements, and the number of particles, particle radius, and background color can be dynamically adjusted using the Leva control panel.</p>
                    <p>This function calculates the distance between each pair of particles and draws connections if they are within a specified range. The opacity of the connections is inversely proportional to the distance, creating a visually dynamic and interactive particle web.</p>`
    }
]

export default Animation2DArray;