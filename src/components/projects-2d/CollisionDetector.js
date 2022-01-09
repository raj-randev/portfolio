import React, { useRef, useEffect } from 'react'
import distance from '../../utilities/distance';
import randomColor from '../../utilities/randomColor';
import resolveCollision from '../../utilities/resolveCollision';
import randomIntFromRange from '../../utilities/randomIntFromRange';
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';


const CollisionDetector= () => {
    
    const canvasRef = useRef(null);

    /**
     * Leva Control Panel
     */

    const { bgCD } = useControls('Control Panel',{ 

      bgCD: { value: '#ffffff', label: 'Background Color' },

    }) 

    useEffect(() =>{

      let canvas = canvasRef.current;

      let c = canvas.getContext('2d');

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      

      /**
       * Resize & Reinitialise
       */

      const handleResize = () => {

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        init();

      }
      

      /**
       * Mouse Movement function
       */

      const mouseMove = (event) => {

        mouse.x = event.clientX
        mouse.y = event.clientY

      }
      

      /**
       * Animate Function
       */

      const animate = () => {

        requestAnimationFrame(animate)

        c.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach( particle => {

          particle.update(particles);

        })
      
      }  
      
      const mouse = {

        x: 10,
        y: 10
  
      }
  
      //Array of colours to choose from
      const colors = ['#2185C5', '#7ECEFD', '#FF7F66']
  
      //Empty Array declaration
      let particles = []
  

      /**
       * Particle Class Constructor
       */

      class Particle {
  
        constructor(x, y, radius) {
  
          this.x = x
          this.y = y
          this.velocity = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5
          }
          this.radius = radius
          this.color = randomColor(colors)
          this.mass = 2
          this.opacity = 0
          
          //Function to update the location of particle
          this.update = function(particles) {
            this.draw();
  
            for (let i = 0; i < particles.length; i++){
              if (this === particles[i]) {
                continue
              }
              if (distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                resolveCollision(this, particles[i]);
              }
            }
  
            //bounce off the right or left side of the screen
            if(this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
              this.velocity.x = -this.velocity.x
            }
            
            //bounce off the top or the bottom of the screen
            if(this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
              this.velocity.y = -this.velocity.y
            }
  
            //Add color to fill on hover with a radius on 200px
            if(distance(mouse.x, mouse.y, this.x, this.y) < 200 && this.opacity < 0.2) {
              this.opacity += 0.02
            } else if ( this.opacity > 0) {
              this.opacity -= 0.02
              this.opacity = Math.max(0, this.opacity)
            }
  
            this.x += this.velocity.x
            this.y += this.velocity.y
          }
        
       
          this.draw = function() {
  
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.save();
            c.globalAlpha = this.opacity
            c.fillStyle = this.color
            c.fill()
            c.restore();
            c.strokeStyle = this.color
            c.stroke()
            c.closePath()
  
          }
  
        }
  
      }
  
      const init = () => {
  
        particles = []
       
        //Creating 100 circles using a for loop
        for (let i = 0; i < 100; i++) {
  
          const radius = 15
          let x = randomIntFromRange(radius, canvas.width - radius)
          let y = randomIntFromRange(radius, canvas.height - radius)
          
      
          if(i !== 0) {
            for (let j = 0; j < particles.length; j++){
              if (distance(x, y, particles[j].x, particles[j].y) - radius *2 < 0) {
                x = randomIntFromRange(radius, canvas.width - radius)
                y = randomIntFromRange(radius, canvas.height - radius)
      
                j = -1
              }
            }
          }
      
          particles.push(new Particle(x, y, radius))
  
        }
  
      }


      /**
       * Event Listeners
       */

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', mouseMove);

      init();

      animate();
      
    }, []) 

    

    return (

      <div className='project'>

        <div className='pageTitle'>
            <h1 style={{color: '#000000'}}>{Animation2DArray[4].name}</h1>
        </div>

        <canvas style={{backgroundColor: bgCD }} ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[4].name} repoAddress={Animation2DArray[4].repo} text={Animation2DArray[4].description} />

        <Leva collapsed={true}/>

      </div>

  )

}

export default CollisionDetector