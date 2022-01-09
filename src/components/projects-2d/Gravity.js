import React, { useRef, useEffect } from 'react'
import randomColor from '../../utilities/randomColor';
import randomIntFromRange from '../../utilities/randomIntFromRange';
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const Gravity = () => {
    
    const canvasRef = useRef(null);

    const { bgG } = useControls('Control Panel',{ 

      bgG: { value: '#ffffff', label: 'Background Color' },

    })

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
       * Animate Function
       */

      const animate = () => {

        requestAnimationFrame(animate);

        c.clearRect(0, 0, canvas.width, canvas.height);
      
        for (let i = 0; i < ballArray.length; i++) {

          ballArray[i].update();

        }
        
      }

      //Array of colours to choose from
      let colors = [

        '#2185C5', 
        '#7ECEFD', 
        '#FFF6E5', 
        '#FF7F66'
  
      ]
  
      //Gravity to a constant
      let gravity = 1;
  
      //Friction set as a fraction: it is maultiplied by the speed each time to casue an eventual stop
      let friction = 0.9;
  
      //Array for the balls to live in
      let ballArray;
  

      /**
       * Ball Class Constructor
       */

      class Ball {
  
        constructor(x, y, dx, dy, radius, color, strkColor) {
  
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          this.color = color;
          this.strkColor = strkColor;
      
          this.update = () => {
      
            //Controls the up and down movement of the ball
            if (this.y + this.radius + this.dy > canvas.height) {
              this.dy = -this.dy * friction;//instructs the ball's height and speed of ascent: Gets smaller with each bounce 
            } else {
              this.dy += gravity; //instructs the ball on descent
            }
      
            //Controls the side to side movement of the ball
            if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
              this.dx = -this.dx * friction; 
            }
      
            //x-asis(position + velocity)
            this.x += this.dx;
      
            //y-axis(position + velocity)
            this.y += this.dy;
      
            //draws the ball
            this.draw();
  
          };
      
          //istructions on building the ball
          this.draw = () => {
  
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
            c.strokeStyle = this.strkColor;
            c.closePath();
  
          };
  
        }
  
      }
  
      const init = () => {
  
        ballArray = [];
        
        if (canvas.width <= 400) {
          //Indicates the number of ball wanted on the screen
          for (let i = 0; i < 50; i++) {
  
            let radius = randomIntFromRange(10, 25);
            let x = randomIntFromRange(radius, canvas.width - radius); 
            let y = randomIntFromRange(radius, canvas.height - radius);
            let dx = randomIntFromRange(-5, 5);
            let dy = randomIntFromRange(-5, 5);
            let color = randomColor(colors);
        
            ballArray.push(new Ball(x, y, dx, dy,  radius, color, "#000000"));
    
          }
        } else {
          for (let i = 0; i < 100; i++) {
  
            let radius = randomIntFromRange(10, 40);
            let x = randomIntFromRange(radius, canvas.width - radius); 
            let y = randomIntFromRange(radius, canvas.height - radius);
            let dx = randomIntFromRange(-5, 5);
            let dy = randomIntFromRange(-5, 5);
            let color = randomColor(colors);
        
            ballArray.push(new Ball(x, y, dx, dy,  radius, color, "#000000"));
    
          }
        }

      }

      
      /**
       * Event Listeners
       */

      window.addEventListener('resize', handleResize);
      canvas.addEventListener('click', handleResize);

      init();

      animate();
      
    }, []) 

    

    return (

      <div className='project'>

        <div className='pageTitle'>
        <h1 style={{color: '#000000'}}>{Animation2DArray[1].name}</h1>
        <h3>Click to reinitiate</h3>
        </div>

        <canvas style={{backgroundColor: bgG }} ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[1].name} repoAddress={Animation2DArray[1].repo} text={Animation2DArray[1].description} />

        <Leva collapsed={true} />

      </div>  
      
    )

}

export default Gravity