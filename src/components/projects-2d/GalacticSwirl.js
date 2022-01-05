import React, { useRef, useEffect } from 'react';
import randomColor from '../../utilities/randomColor';
import randomIntFromRange from '../../utilities/randomIntFromRange';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const GalacticSwirl = () => {
    
    const canvasRef = useRef(null);

    useEffect(() => {

      let canvas = canvasRef.current;

      let c = canvas.getContext('2d');

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      

      /**
       * Resize function & Reinitialise
       */

      const handleResize = () => {

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        init();

      }


      /**
       * Mouse Click function
       */

      const mouseClick = () => {

        mouseDown = true;

      }


      /**
       * Mouse Release function
       */

      const mouseRelease = () => {

        mouseDown = false

      }


      /**
       * Animate Function
       */

      function animate() {

        requestAnimationFrame(animate)

        c.fillStyle = `rgba(10, 10, 10, ${alpha})`

        //Fills the previous frame with black background
        c.fillRect(0, 0, canvas.width, canvas.height)
        
        c.save()
        c.translate(canvas.width/2, canvas.height / 2)
        c.rotate(radians)
        particles.forEach(particle => {

          particle.update();

        })

        c.restore()
      
        //Adds rotation to the background
        radians += 0.01
      
        //subtract 0.01 from the alpha value to produce trail
        if(mouseDown && alpha >= 0.002){
          alpha -= 0.01
        }
        //add 0.01 to alpha to remove trail
        else if(!mouseDown && alpha < 1){
          alpha += 0.01
        }
      }
      
      //Array of colours to choose from
      const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

      //sets mouse down to initially be false
      let mouseDown = false

      //Empty variable
      let particles

      //sets radians to 0 to start
      let radians = 0;

      //Opacity is set to full colour
      let alpha = 1;

      
      /**
       * Particle Class Constructor
       */

      class Particle {

        constructor(x, y, radius, color) {

          this.x = x
          this.y = y
          this.radius = radius
          this.color = color

        }

        draw() {

          c.beginPath()
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
          c.shadowColor = this.color
          c.shadowBlur = 15
          c.fillStyle = this.color
          c.fill()
          c.closePath()

        }

        update() { 

          this.draw()

        }

      }

      const init = () => {

        particles = []
      
        //Indicates the number of particles wanted on the screen
        for (let i = 0; i < 700; i++) {

          //Sets the canvas width to be bigger than the winow size so that  particle go past corners
          const canvasWidth = canvas.width + 500
          const canvasHeight = canvas.height + 1000
          const x = (Math.random() * canvasWidth) - canvasWidth / 2
          const y = (Math.random() * canvasHeight) - canvasHeight / 2
          const radius = randomIntFromRange(0.1, 1)
          const color = randomColor(colors)
          particles.push(new Particle(x, y, radius, color))

        }
      }
      

      /**
       * Event Listeners
       */

      window.addEventListener('resize', handleResize);
      window.addEventListener('ontouchstart', mouseClick);
      window.addEventListener('mousedown', mouseClick);
      window.addEventListener('mouseup', mouseRelease);

      init();

      animate();
      
    }, []) 

    

    return (

      <div className='project'>

        <div className='pageTitle'>
              <h1 style={{color: '#ffffff'}}>{Animation2DArray[5].name}</h1>
              <h3 style={{color: '#ffffff'}}>Click and hold screen to initiate</h3>
        </div>

        <canvas ref={canvasRef} ></canvas>

        <Info text={Animation2DArray[0].description} />

      </div>  

    )
    
}

export default GalacticSwirl