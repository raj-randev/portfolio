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
        repo: 'https://github.com/raj-randev/Red-Blood-Cells',
        image: BDImg,
        description: '<p> For this 2d animation, I used a for loop to create 100 red blood cells. The for loop contains a radius variable, x and y positions as variables and x + y velocities as variables. All these variables are added to a class constructor and stored in circle array. For the red blood cells to have random positions and random speeds, the position and velocity variables contain equations with the <span class="code whiteFont blackBackground"><span class="lightBlueFont">Math</span>.<span class="yellowFont">random</span>()</span> function. As well as the Math.random() function, the position equation includes the canvas width and height and the diameter of the red blood cell. This ensures that all blood cells fall randomly within the area of the window. The movement and speed of each blood cell is dictated by its random velocity. The random velocity goes in all directions as a <span class="code whiteFont blackBackground"><span class="lightBlueFont">Math</span>.<span class="yellowFont">random</span>()</span> value has 0.5 subtracted from it and therefore, can either be positive of negative. </p>'
    },
    {
        id: 1,
        name: 'Gravity',
        path: '/animation-2d/gravity',
        repo: 'https://github.com/raj-randev/Gravity',
        image: GImg,
        description: '<p>For this 2d animation, I used a for loop to create 100 circles. I used a random value function to set the radius of each circle between 10-40px. I used the same function to set the x and y positions of each circle between the canvas. This function also worked to produce a velocity between –5 and 5. This allows the circle to travel in all directions. The <span class="code whiteFont blackBackground"><span class="yellowFont">randomColor</span>()</span> function runs through an array of colours and displays it within the animation. The gravity variable is set to 1 and acts as a constant. To slow the circles down, the variable friction is multiplied with gravity every second. Friction is set to 0.9 and results in the circle slowing to a standstill. </p>'
    },
    {
        id: 2,
        name: 'Falling Star',
        path: '/animation-2d/falling-star',
        repo: 'https://github.com/raj-randev/falling-star',
        image: FSImg,
        description: '<p>For this animation, white circles are created outside of the canvas and have the force of gravity added to them. Once the circle meets the floor and walls, it gets removed from the circle array and 8 smaller circles are added. These 8 circles have a random velocity added to them and move in a different direction as a result. When the 8 circles hit the floor or sides, they are removed from the array, 8 more smaller circles are created. There is an if/else statement to remove all circles completely once they are below a certain size.</p>'
    },
    {
        id: 3,
        name: 'Circular Spins',
        path: '/animation-2d/circular-spins',
        repo: 'https://github.com/raj-randev/Circular-Spins',
        image: CSImg,
        description: '<p>This animation requires several variables. The particles starting points (which begins in the centre of the canvas), a radius to dictate the thickness of each particle, a colour array to instruct the colour of the particle and a <span class="code whiteFont blackBackground"><span class="yellowFont">randomIntFromRange</span>()</span> function to dictate the distance from the center of the circle. For the particles to move in a circular motion, <span class="code whiteFont blackBackground"><span class="lightBlueFont">Math</span>.<span class="yellowFont">PI</span></span> is multiplied by 2 and is added to a velocity of 0.07. This is put in an update function and is called on every frame. The canvas fillRect is also updated on each frame and because it has an opaque white background, results in each particle leaving a tail behind it. </p>'
    },
    {
        id: 4,
        name: 'Collison Detector',
        path: '/animation-2d/collision-detector',
        repo: 'https://github.com/raj-randev/Collision-Detector',
        image: CDImg,
        description: '<p>For this 2d animation, we have particles that have weight. Along with movement, each particle passes on its velocity when it meets other moving particles. The fillStyle of each particle is affected by the mouse hovering over it with a 200px diameter. To get a realistic collision between the particles, the <span class="code whiteFont blackBackground"><span class="yellowFont">resolveCollision</span>()</span> function is used to calculate the physics between each interaction.</p>'
    },
    {
        id: 5,
        name: 'Galactic Swirl',
        path: '/animation-2d/galactic-swirl',
        repo: 'https://github.com/raj-randev/Galactic-Swirl',
        image: GSImg,
        description: '<p>This 2d animation consists of a black canvas and multiple particles. The particle uses a selection of colours from an array. The particles are randomly placed within the canvas area and are set on rotation. <span class="code whiteFont blackBackground"><span class="lightBlueFont">Math</span>.<span class="yellowFont">random</span>()</span> multiplied by <span class="code whiteFont blackBackground">( <span class="lightGreenFont">2</span> * <span class="lightBlueFont">Math</span>.<span class="yellowFont">PI</span> )</span> sets the movement on a circle and each frame is updated by adding 0.01 to this value. To ensure the particles go beyond the visible canvas, extra width is added to all sides. The alpha value for the black background colour decreases with and a mouseDown event and increases with a mouseUp event. This gives the effect of a trail behind each particle.</p>'
    },
    {
        id: 6,
        name: 'Interactive Balls',
        path: '/animation-2d/interactive-balls',
        repo: 'https://github.com/raj-randev/Interactive-Balls',
        image: IBImg,
        description: '<p>This 2d animation contains an array of colours, a function to state the size of the particles between a certain range and instructions on the movement of each particle. On hover, any particle that is within a 50px radius increases its size to 200px in diameter.</p>'
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
        description: '<p>For this 2d animation, I have placed 1500 particles randomly between the canvas\'s width and height. I’ve stored the current x and y values for the mouse in a variable and use a mouse move event listener to update that value. In order to produce the repel action, the mouse has a radius of 250px and the particles move at different speeds to reach the circumference of the circle.</p>'
    },
    {
        id: 9,
        name: 'Sine Waves',
        path: '/animation-2d/sine-waves',
        repo: 'https://github.com/raj-randev/sine-waves',
        image: SWImg,
        description: '<p>For this 2d animation, we start off with a lineTo line from the halfway point of the canvas height that goes the width of the canvas. To give the line a wave, we need to affect each pixel of the line. We can do this by running the lineTo through a for loop by the width of the canvas. We then multiply the start point by <span class="code whiteFont blackBackground"><span class="lightBlueFont">Math</span>.<span class="yellowFont">sin</span>()</span> over every iteration and this produces a tight and small wavy line. In order to make our wave bigger in length, we add <span class="code whiteFont blackBackground">{ <span class="lightBlueFont">i</span> * <span class="darkBlueFont">wave</span>.<span class="lightBlueFont">length</span> }</span> argument the  <span class="code whiteFont blackBackground"><span class="lightBlueFont">Math</span>.<span class="yellowFont">sin</span>()</span> function. We add an increment value inside of the argument and this give the wave horizontal movement on each frame of animation. To give the wave height, we multiply everything by a wave.amplitude variable. Finally, to give the wave dynamic movement, we multiply everything by Math.sin(increment). The whole equation looks like this <span class="code whiteFont blackBackground">{ <span class="lightBlueFont">c</span>.<span class="yellowFont">lineTo</span>(<span class="lightBlueFont">i</span>, <span class="darkBlueFont">wave</span>.<span class="lightBlueFont">y</span> + <span class="lightBlueFont">Math</span>.<span class="yellowFont">sin</span>(<span class="lightBlueFont">i</span> * <span class="darkBlueFont">wave</span>.<span class="lightBlueFont">length</span> + <span class="lightBlueFont">increment</span>) * <span class="darkBlueFont">wave</span>.<span class="lightBlueFont">amplitude</span> * <span class="lightBlueFont">Math</span>.<span class="yellowFont">sin</span>(<span class="lightBlueFont">increment</span>));}</span></p>'
    }
]

export default Animation2DArray;