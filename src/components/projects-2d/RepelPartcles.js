import React, { useRef, useEffect, useState } from 'react';
import { useControls, folder, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const RepelParticles = () => {
    
    const canvasRef = useRef(null);
    const [isLevaCollapsed, setIsLevaCollapsed] = useState(window.innerWidth <= 400);

    /**
     * Leva Control Panel
     */

    const { 
      
      bgRepP,
      colorOneControl,
      numParticles, 
      mouseRadius
    
    } = useControls('Control Panel',{ 

      Background: folder({
      
        bgRepP: { value: '#000000', label: 'Colour' },
  
      }),

      Stars: folder({

        Colour: folder({

          colorOneControl: { label: 'One', value: '#ffffff', row: 1 },

        }),

        Configuration: folder ({

          numParticles: { label: 'Number of', value: 1500, step: 1 },
          mouseRadius: { label: 'Mouse Radius', value: 250, step: 1},

        }),

      })

    }) 

    useEffect(() =>{

      let canvas = canvasRef.current;

      let c = canvas.getContext('2d');

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      

      /**
       * Resize & Reinitialise function
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
       * Mouse Move Function
       */

      const mouseMove = (event) => {

        mouse.x = event.x;
        mouse.y = event.y;

      }
      

      /**
       * Animate Function
       */

      const animate = () => {

        c.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particleArray.length; i++) {

          if (canvas.width < 400) {
            mouse.radius = (mouseRadius / 2);
          } else {
            mouse.radius = mouseRadius;
          }

          particleArray[i].draw();
          particleArray[i].update();

        }

        requestAnimationFrame(animate);

      }

      //Empty Array declaration
      let particleArray = [];

      //Container to record mouse x & y coordinates and specify a radius
      const mouse = {

        x: null,
        y: null,
        radius: undefined

      }

      

      /**
       * Particle Class Constructor
       */

      class Particle {

        constructor(x, y) {

          this.x = x;
          this.y = y;
          this.size = 1;
          this.baseX = this.x;
          this.baseY = this.y;
          this.density = (Math.random() * 30 + 1);

        }

        draw() {

          c.fillStyle = colorOneControl;
          c.beginPath();
          c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          c.closePath();
          c.fill();

        }
    
        update() {

          //Mouse position - particle position
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;

          //Hypotenuse 
          let distance = Math.sqrt(dx * dx + dy * dy)

          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;

          //Pushes particles to the circumference 
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
    
          if (distance < mouse.radius) {

            this.x -= directionX;
            this.y -= directionY;

          } else {
    
            if(this.x !== this.baseX) {

              let dx = this.x - this.baseX;
              this.x -= dx;

            }
    
            if(this.y !== this.baseY) {

              let dy = this.y - this.baseY;
              this.y -= dy;

            }

          }

        }

      }

      const init = () => {

        particleArray = [];
    
        //Creating 1500 circles using a for loop
        for (let i = 0; i < numParticles; i++){

          let x = Math.random() * canvas.width;
          let y = Math.random() * canvas.height;

          particleArray.push(new Particle(x,y))

        }
        
      }


      /**
       * Event Listeners
       */

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', mouseMove);

      init();

      animate();
      
    }, [
      colorOneControl,
      numParticles,
      mouseRadius,
    ]) 

    

  return (

      <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation2DArray[8].name}</h1>
        </div>

        <canvas style={{backgroundColor: bgRepP }} ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[8].name} repoAddress={Animation2DArray[8].repo} text={Animation2DArray[8].description} />

        <Leva collapsed={isLevaCollapsed}/>

      </div>

  )
  
}

export default RepelParticles