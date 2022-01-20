import React, { useRef, useEffect } from 'react';
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const ParticleWeb = () => {
    
    const canvasRef = useRef(null);

    const { bgG } = useControls('Control Panel',{ 

      bgG: { value: '#23271f', label: 'Background Color' },

    })

    useEffect(() =>{

      let canvas = canvasRef.current;

      let c = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particleArray = [];

      //Mouse positiion and radius

      const mouse = {

          x: undefined,
          y: undefined,
          radius: (canvas.height/80) * (canvas.width/80)

        }

      window.addEventListener('mousemove', (event) => {
          mouse.x = event.x;
          mouse.y = event.y;
      });

      window.addEventListener('resize', () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          mouse.radius = (canvas.height/80) * (canvas.width/80);

          init();
      });

      window.addEventListener('mouseout', () => {
          mouse.x = undefined;
          mouse.y = undefined;
      })

      //create Particle
      class Particle {
          constructor(x, y, directionX, directionY, size, color) {
              this.x = x;
              this.y = y; 
              this.directionX = directionX;
              this.directionY = directionY;
              this.size = size;
              this.color = color;
          }

          draw = () => {
              c.beginPath();
              c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
              c.fillStyle = '#8c5523';
              c.fill();
          }

          update = () => {
              if (this.x > canvas.width || this.x < 0) {
                  this.directionX = -this.directionX
              }
              if (this.y > canvas.height || this.y < 0) {
                  this.directionY = -this.directionY
              }

              let dx = mouse.x - this.x;

              let dy = mouse.y - this.y;

              let distance = Math.sqrt((dx * dx) + (dy * dy));

              if (distance < mouse.radius + this.size) {
                  if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                      this.x += 10;
                  }
                  if (mouse.x > this.x && this.x > this.size * 10) {
                      this.x -= 10;
                  }
                  if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                      this.y += 10;
                  }
                  if (mouse.y > this.y && this.y > this.size * 10) {
                      this.y -= 10;
                  }
              }

              this.x += this.directionX;
              this.y += this.directionY;

              this.draw()
          }
      }

      const init = () => {
          particleArray = [];

          let numberOfParticles = (canvas.height * canvas.width) / 8000;

          for (let i = 0; i < numberOfParticles; i++) {
              let size = (Math.random() * 5) + 1;
              let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
              let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
              let directionX = (Math.random() * 5) - 2.5;
              let directionY = (Math.random() * 5) - 2.5;
              let color = '#8C5523';

              particleArray.push(new Particle(x,y, directionX, directionY, size, color))
          }
      }

      const animate = () => {
          requestAnimationFrame(animate);
          c.clearRect(0, 0, window.innerWidth, window.innerHeight);

          for (let i = 0; i < particleArray.length; i++) {
              particleArray[i].update();
          }
          connect();
      }

      const connect = () => {
          let opacityValue = 1;
          for (let a = 0; a < particleArray.length; a++){
              for (let b = a; b < particleArray.length; b++){
                  let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x)) + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
                  if (distance < (canvas.width/7) * (canvas.height/7)) {
                      opacityValue = 1 - (distance/20000);
                      c.strokeStyle = `rgba(140, 85, 31, ${opacityValue})`;
                      c.lineWidth = 1;
                      c.beginPath();
                      c.moveTo(particleArray[a].x, particleArray[a].y);
                      c.lineTo(particleArray[b].x, particleArray[b].y);
                      c.stroke();
                  }
              }
          }
      }

      init();

      animate();
      
    }, []) 

    

    return (

      <div className='project'>

        <div className='pageTitle'>
        <h1 style={{color: '#ffffff'}}>{Animation2DArray[10].name}</h1>
        </div>

        <canvas style={{backgroundColor: bgG }} ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[10].name} repoAddress={Animation2DArray[10].repo} text={Animation2DArray[10].description} />

        <Leva collapsed={true} />

      </div>  
      
    )

}

export default ParticleWeb