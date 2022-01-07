import React, { useRef, useEffect } from 'react';
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const RainbowParticles = () => {
    
    const canvasRef = useRef(null);

    const { bgRainP } = useControls('Control Panel',{ 

      bgRainP: { value: '#000000', label: 'Background Color' },

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

      }


      /**
       * Mouse Click function
       */

      const mouseClick = (event) => {

        mouse.x = event.x;
        mouse.y = event.y;
    
        //Creates 5 particles on a mouse click
        for (let i = 0; i < 5; i++) {

          particleArray.push(new Particle());

        }

      }
      

      /**
       * Mouse Move function
       */

      const mouseMove = (event) => {

        mouse.x = event.x;
        mouse.y = event.y;
        
        //Creates 2 particles on the mouse moving
        for (let i = 0; i < 2; i++) {

          particleArray.push(new Particle());

        }

      }
      

      /**
       * Animate Function
       */

      const animate = () => {

        c.clearRect(0, 0, canvas.width, canvas.height);

        handleParticles();

        hue += 0.5;

        requestAnimationFrame(animate);

      }

      //Empty Array for Particles
      const particleArray = [];

      //First value in HUE Colour
      let hue = 0;

      //Container to record mouse's X and Y coordinates
      const mouse = {

        x: undefined,
        y: undefined

      }


      /**
       * Particle Class Constructor
       */

      class Particle {

        constructor(){

            this.x = mouse.x;
            this.y = mouse.y;

            //Size between 1-15px 
            this.size = Math.random() * 15 + 1;

            //Returns a postive or negative(allow left or right movement)
            this.speedX = Math.random() * 3 - 1.5;

            //Returns a postive or negative(allow up or down movement)
            this.speedY = Math.random() * 3 - 1.5;

            //Hue variable changes giving the rainbow effect
            this.color = `hsl(${hue}, 100%, 50%)`;

        }
    
        //Updates the speed, direction and size of the Particle
        update = () => {

          //Adds direction and velocity to the x-axis
          this.x += this.speedX;

          //Adds direction and velocity to the y-axis
          this.y += this.speedY;

          //Reduces the size of each particle until it disappears
          if (this.size > 0.2) this.size -=0.05;

        }
    
        draw = () => {

            c.fillStyle = this.color;
            c.beginPath();
            c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            c.stroke();
            c.fill();

        }

      }

      const handleParticles = () => {

        for (let i = 0; i < particleArray.length; i++){

            particleArray[i].update();
            particleArray[i].draw();

            for (let j = i; j < particleArray.length; j++) {

                const dx = particleArray[i].x - particleArray[j].x;
                const dy = particleArray[i].y - particleArray[j].y;

                //work out hypotinuse between neighboring particles
                const hypDistance = Math.sqrt((dx*dx) + (dy*dy));

                //Add line to adjoining particle if hypotinuse is <= 100px
                if (hypDistance < 100) {

                    c.beginPath();
                    c.strokeStyle = particleArray[i].color;
                    c.lineWidth = 0.2;
                    c.moveTo(particleArray[i].x, particleArray[i].y);
                    c.lineTo(particleArray[j].x, particleArray[j].y);
                    c.stroke();
                    c.closePath();

                }

            }

            //If the particle is smaller than 0.3, remoev from the particle array
            if (particleArray[i].size <= 0.3) {

                particleArray.splice(i, 1);

                i--;

            }

        }

      }
      

      /**
       * Event Listeners
       */
      

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('click', mouseClick);

      animate();
      
    }, []) 

    return (

      <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation2DArray[7].name}</h1>
        </div>

        <canvas style={{backgroundColor: bgRainP }} ref={canvasRef} ></canvas>

        <Info text={Animation2DArray[7].description} />

        <Leva collapsed={true}/>

      </div>  

    )
    
}

export default RainbowParticles