import React, { useRef, useEffect } from 'react';
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const RepelParticles = () => {
    
    const canvasRef = useRef(null);


    /**
     * Leva Control Panel
     */

    const { bgRepP } = useControls('Control Panel',{ 

      bgRepP: { value: '#000000', label: 'Background Color' },

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
            mouse.radius = 100;
          } else {
            mouse.radius =250;
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

          c.fillStyle = '#ffffff';
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
        for (let i = 0; i < 1500; i++){

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
      
    }, []) 

    

  return (

      <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation2DArray[8].name}</h1>
        </div>

        <canvas style={{backgroundColor: bgRepP }} ref={canvasRef} ></canvas>

        <Info text={Animation2DArray[8].description} />

        <Leva collapsed={true}/>

      </div>

  )
  
}

export default RepelParticles