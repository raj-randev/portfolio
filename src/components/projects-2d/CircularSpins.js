import React, { useRef, useEffect } from 'react'
import randomColor from '../../utilities/randomColor';
import randomIntFromRange from '../../utilities/randomIntFromRange';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';


const CircularSpins = () => {
    
    const canvasRef = useRef(null);

    useEffect(() =>{

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
       * Mouse Movement function
       */

      const mouseMove = (event) => {

        mouse.x = event.clientX;
        mouse.y = event.clientY;

      }
      

      /**
       * Animate Function
       */

      const animate = () => {
  
        requestAnimationFrame(animate)
        
        c.fillStyle = "rgba(255, 255, 255, 0.05)"

        //Fills the previous frame with opaque white background
        c.fillRect(0, 0, canvas.width, canvas.height)
      
        particles.forEach(particle => {

          particle.update();

        });

      }
      
      //Half way in width and height of browser screen
      const mouse = {

        x: canvas.width / 2,
        y: canvas.height / 2
  
      }
  
      //Array of colours to choose from
      const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
  
      //Empty Array declaration
      let particles = []
  

      /**
       * Particle Class Constructor
       */

      class Particle {
  
        constructor(x, y, radius, color) {
  
          this.x = x
          this.y = y
          this.radius = radius
          this.color = color
          this.radians = Math.random() * Math.PI * 2 
          this.velocity = 0.07 
          this.distanceFromCenter = randomIntFromRange(50, 200) 
          this.lastMouse = {
  
            x: x,
            y: y
  
          }
  
          //Function to update the location of particle
          this.update = () => {
  
            const lastPoint = {
  
              x: this.x,
              y: this.y
  
            }
  
            //by adding the velocity to the radians, we add circular movement
            this.radians += this.velocity 
  
            //smoothes over the movement of the particles on the x-axis
            this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05 

            //smoothes over the movement of the particles on the y-axis
            this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05 
  
            //Particle displays of the x-axis
            this.x = this.lastMouse.x + Math.cos(this.radians)
              * this.distanceFromCenter 
  
            //Particle displays on the y-axis
            this.y = this.lastMouse.y + (Math.sin(this.radians))
              * this.distanceFromCenter 
            
            
            this.draw(lastPoint)
  
          }
  
          //Function to draw particle
          this.draw = lastPoint => {
  
            c.beginPath()
            c.strokeStyle = this.color
            c.lineWidth = this.radius
            c.moveTo(lastPoint.x, lastPoint.y)
            c.lineTo(this.x, this.y)
            c.stroke()
            c.closePath()
  
          }
  
        }
  
      }
  
      //Function to start movement of particles
      const init = () => {
  
        particles = []
      
        //Indicates the number of particles wanted on the screen
        for (let i = 0; i < 80; i++) {
          
          const radius = (Math.random() * 2) + 1; 
  
          particles.push(new Particle(
            canvas.width/2, 
            canvas.height/2, 
            radius, 
            randomColor(colors)))
  
        }
  
      }
      

      /**
       * Event Listeners
       */

      window.addEventListener('resize', handleResize);
      window.addEventListener('onload', handleResize);
      window.addEventListener('mousemove', mouseMove);

      init();

      animate();
      
    }, []) 


    return (

      <div className='project'>

        <div className='pageTitle'>
              <h1 style={{color: '#000000'}}>{Animation2DArray[3].name}</h1>
          </div>

        <canvas ref={canvasRef}  ></canvas>

        <Info title={Animation2DArray[3].name} repoAddress={Animation2DArray[3].repo} text={Animation2DArray[3].description} />

      </div>
  )
}
export default CircularSpins