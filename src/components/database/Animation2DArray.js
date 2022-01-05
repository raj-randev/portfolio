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

let Animation2DArray = [
    {
        id: 0,
        name: 'Red Blood Cells',
        path: '/animation-2d/red-blood-cells',
        image: BDImg,
        description: 'For this 2d animation, I used a for loop to create 100 red blood cells. The for loop contains a radius variable, x and y positions as variables and x + y velocities as variables. All these variables are added to a class constructor and stored in circle array. For the red blood cells to have random positions and random speeds, the position and velocity variables contain equations with the Math.random() function. As well as the Math.random() function, the position equation includes the canvas width and height and the diameter of the red blood cell. This ensures that all blood cells fall randomly within the area of the window. The movement and speed of each blood cell is dictated by its random velocity. The random velocity goes in all directions as a Math.random() value has 0.5 subtracted from it and therefore, can either be positive of negative. '
    },
    {
        id: 1,
        name: 'Gravity',
        path: '/animation-2d/gravity',
        image: GImg,
        description: 'For this 2d animation, I used a for loop to create 100 circles. I used a random value function to set the radius of each circle between 10-40px. I used the same function to set the x and y positions of each circle between the canvas. This function also worked to produce a velocity between –5 and 5. This allows the circle to travel in all directions. The randomColor() function runs through an array of colours and displays it within the animation. The gravity variable is set to 1 and acts as a constant. To slow the circles down, the variable friction is multiplied with gravity every second. Friction is set to 0.9 and results in the circle slowing to a standstill.'
    },
    {
        id: 2,
        name: 'Falling Star',
        path: '/animation-2d/falling-star',
        image: FSImg,
        description: 'For this animation, white circles are created outside of the canvas and have the force of gravity added to them. Once the circle meets the floor and walls, it gets removed from the circle array and 8 smaller circles are added. These 8 circles have a random velocity added to them and move in a different direction as a result. When the 8 circles hit the floor or sides, they are removed from the array, 8 more smaller circles are created. There is an if/else statement to remove all circles completely once they are below a certain size.'
    },
    {
        id: 3,
        name: 'Circular Spins',
        path: '/animation-2d/circular-spins',
        image: CSImg,
        description: 'This animation requires several variables. The particles starting points (which begins in the center of the canvas), a radius to dictate the thickness of each particle, a colour array to instruct the colour of the particle and a randomIntFromRange() function to dictate the distance from the center of the circle. For the particles to move in a circular motion, Math.PI is multiplied by 2 and is added to a velocity of 0.07. This is put in an update function and is called on every frame. The canvas fillRect is also updated on each frame and because it has an opaque white background, results in each particle leaving a tail behind it.'
    },
    {
        id: 4,
        name: 'Collison Detector',
        path: '/animation-2d/collision-detector',
        image: CDImg,
        description: 'For this 2d animation, we have particles that have weight. Along with movement, each particle passes on its velocity when it meets other moving particles. The fillStyle of each particle is affected by the mouse hovering over it with a 200px diameter. To get a realistic collision between the particles, the resolveCollision() function is used to calculate the physics between each interaction.'
    },
    {
        id: 5,
        name: 'Galactic Swirl',
        path: '/animation-2d/galactic-swirl',
        image: GSImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 6,
        name: 'Interactive Balls',
        path: '/animation-2d/interactive-balls',
        image: IBImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 7,
        name: 'Rainbow Particles',
        path: '/animation-2d/rainbow-particles',
        image: RPImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 8,
        name: 'Repel Particles',
        path: '/animation-2d/repel-particles',
        image: RPPImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    },
    {
        id: 9,
        name: 'Sine Waves',
        path: '/animation-2d/sine-waves',
        image: SWImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nunc dolor, id consectetur quam lobortis id. Curabitur interdum risus eget turpis condimentum dignissim. Nulla sed leo lobortis, tincidunt lectus sed, molestie ligula. Donec quis porta felis. Suspendisse sed fermentum erat. Vestibulum sollicitudin, nulla ac dapibus ullamcorper, enim est semper dui, at iaculis ligula tortor sed justo.'
    }
]

export default Animation2DArray;