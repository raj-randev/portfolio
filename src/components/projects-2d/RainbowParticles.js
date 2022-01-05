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
      
      const handleResize = () => {

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

      }

      const mouseClick = (event) => {

        mouse.x = event.x;
        mouse.y = event.y;
    
        for (let i = 0; i < 5; i++) {

          particleArray.push(new Particle());

        }

      }
      
      const mouseMove = (event) => {

        mouse.x = event.x;
        mouse.y = event.y;
        
        for (let i = 0; i < 2; i++) {

          particleArray.push(new Particle());

        }

      }
      

      const animate = () => {

        c.clearRect(0, 0, canvas.width, canvas.height);

        handleParticles();

        hue += 0.5;

        requestAnimationFrame(animate);

      }

      const particleArray = [];

      let hue = 0;

      const mouse = {

        x: undefined,
        y: undefined

      }

      class Particle {

        constructor(){

            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 15 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = `hsl(${hue}, 100%, 50%)`;

        }
    
        update = () => {

            this.x += this.speedX;
            this.y += this.speedY;

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

                const hypDistance = Math.sqrt((dx*dx) + (dy*dy));

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

            if (particleArray[i].size <= 0.3) {

                particleArray.splice(i, 1);

                i--;

            }

        }

      }
      
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

        <Info text={Animation2DArray[0].description} />

        <Leva collapsed={true}/>

      </div>  

    )
    
}

export default RainbowParticles