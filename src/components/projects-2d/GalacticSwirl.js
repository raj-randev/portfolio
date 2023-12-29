import React, { useRef, useEffect, useState } from 'react';
import randomColor from '../../utilities/randomColor';
import randomIntFromRange from '../../utilities/randomIntFromRange';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';
import { useControls, folder, Leva } from 'leva';
import hexToRgb from '../../utilities/hexToRGB';


const GalacticSwirl = () => {
    
    const canvasRef = useRef(null);
    const [isLevaCollapsed, setIsLevaCollapsed] = useState(window.innerWidth <= 400);

    const { 
      
      bgG,
      colorOneControl,
      colorTwoControl,
      colorThreeControl,
      colorFourControl,
    
    } = useControls('Control Panel',{ 

      Background: folder({
      
        bgG: { value: '#000000', label: 'Colour' },
  
      }),

      Stars: folder({

        Colour: folder({
      
          colorOneControl: { label: 'One', value: '#2185C5', row: 1 },
          colorTwoControl: { label: 'Two', value: '#7ECEFD', row: 1 },
          colorThreeControl: { label: 'Three', value: '#FFF6E5', row: 1 },
          colorFourControl: { label: 'Four', value: '#FF7F66', row: 1 },
    
        }),
        
      }),

    })

    useEffect(() => {

      let canvas = canvasRef.current;

      let c = canvas.getContext('2d');

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      

      /**
       * Resize function & Reinitialise
       */

      const handleResize = () => {

        if (window.innerWidth <= 400) {
          setIsLevaCollapsed(true);
        } else {
          setIsLevaCollapsed(false);
        }

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

      const touchStart = () => {

        mouseDown = true;

      };
      

      /**
       * Mouse Release function
       */

      const mouseRelease = () => {

        mouseDown = false

      }

      const touchEnd = () => {

        mouseDown = false;
        
      };


      /**
       * Animate Function
       */

      function animate() {

        requestAnimationFrame(animate)

        c.fillStyle = `rgba(${hexToRgb(bgG)}, ${alpha})`

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
      const colors = [
        colorOneControl,
        colorTwoControl,
        colorThreeControl,
        colorFourControl,
      ]

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
      window.addEventListener('touchstart', touchStart);
      window.addEventListener('touchend', touchEnd);

      init();

      animate();
      
    }, [
      bgG,
      colorOneControl,
      colorTwoControl,
      colorThreeControl,
      colorFourControl,
    ]) 

    

    return (

      <div className='project'>

        <div className='pageTitle'>
              <h1 style={{color: '#ffffff'}}>{Animation2DArray[5].name}</h1>
              <h3 style={{color: '#ffffff'}}>Click and hold screen to initiate</h3>
        </div>

        <canvas ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[5].name} repoAddress={Animation2DArray[5].repo} text={Animation2DArray[5].description} />

        <Leva collapsed={isLevaCollapsed} />

      </div>  

    )
    
}

export default GalacticSwirl