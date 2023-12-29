import React, { useRef, useEffect, useState } from 'react'
import randomColor from '../../utilities/randomColor';
import randomIntFromRange from '../../utilities/randomIntFromRange';
import { useControls, folder, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const Gravity = () => {
    
    const canvasRef = useRef(null);
    const [isLevaCollapsed, setIsLevaCollapsed] = useState(window.innerWidth <= 400);

    const { 

      bgG,
      colorOneControl,
      colorTwoControl,
      colorThreeControl,
      colorFourControl,
      numCircles,
      maxRadius,
      circleGravity,
      circleFriction,

     } = useControls('Control Panel',{ 

      Background: folder({

        bgG: { value: '#ffffff', label: 'Colour' },
  
      }),

      Circle: folder({

        numCircles: { label: 'Number', value: 100, step: 1 },
        maxRadius: { label: 'L Radius', value: 40, step: 1 },
        Colours: folder({

          colorOneControl: { label: 'One', value: '#353535', row: 1 },
          colorTwoControl: { label: 'Two', value: '#3c6e71', row: 1 },
          colorThreeControl: { label: 'Three', value: '#d9d9d9', row: 1 },
          colorFourControl: { label: 'Four', value: '#284b63', row: 1 },

        }),
        Forces: folder({

          circleGravity: { label: 'Gravity', value: 1, step: 0.1, min: 0.1, max: 10 },
          circleFriction: { label: 'Friction', value: 0.9, step: 0.05, min: 0.05, max: 1 },

        }),

      })

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

        colorOneControl,
        colorTwoControl,
        colorThreeControl,
        colorFourControl,
  
      ]
  
      //Gravity to a constant
      let gravity = circleGravity;

  
      //Friction set as a fraction: it is maultiplied by the speed each time to casue an eventual stop
      let friction = circleFriction;
  
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
          for (let i = 0; i < (numCircles/2); i++) {
  
            let radius = randomIntFromRange(10, (maxRadius/2));
            let x = randomIntFromRange(radius, canvas.width - radius); 
            let y = randomIntFromRange(radius, canvas.height - radius);
            let dx = randomIntFromRange(-5, 5);
            let dy = randomIntFromRange(-5, 5);
            let color = randomColor(colors);
        
            ballArray.push(new Ball(x, y, dx, dy,  radius, color, "#000000"));
    
          }
        } else {
          for (let i = 0; i < numCircles; i++) {
  
            let radius = randomIntFromRange(10, maxRadius);
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
      
    }, [
      colorOneControl,
      colorTwoControl,
      colorThreeControl,
      colorFourControl,
      maxRadius,
      numCircles,
      circleGravity,
      circleFriction,
    ]) 

    

    return (

      <div className='project'>

        <div className='pageTitle'>
        <h1 style={{color: '#000000'}}>{Animation2DArray[1].name}</h1>
        <h3>Click to reinitiate</h3>
        </div>

        <canvas style={{backgroundColor: bgG }} ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[1].name} repoAddress={Animation2DArray[1].repo} text={Animation2DArray[1].description} />

        <Leva collapsed={isLevaCollapsed} />

      </div>  
      
    )

}

export default Gravity