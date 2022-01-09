import React, { useRef, useEffect } from 'react';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';
import { useControls, Leva } from 'leva';

const RedBloodCells = () => {
    
    const canvasRef = useRef(null);

    /**
     * Leva Control Panel
     */

    const { bgRBC } = useControls('Control Panel',{ 

      bgRBC: { value: '#ffffff', label: 'Background Color' },

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
       * Animate Function
       */

      const animate = () => {

        requestAnimationFrame(animate);
        
        //clears the previous frame
        c.clearRect(0, 0, canvas.width, canvas.height);
    
        for (let i = 0; i < circleArray.length; i++) {

          circleArray[i].update();

        }
        
      }

      //Empty Array declaration
      let circleArray = [];


      /**
       * Circle Class Constructor
       */

      class Circle {

        constructor(x, y, dx, dy, radius, color) {

            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color

            this.draw = () => {

                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = "black";
                c.stroke();
                c.fillStyle = this.color;
                c.fill();

            };

            this.update =  () => {

              //bounce off the right or left side of the screen
              if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
              }

              //bounce off the top or the bottom of the screen
              if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
              }

              //adds or minuses the x postion of the circle
              this.x += this.dx;

              //adds or minuses the y position of the circle
              this.y += this.dy;

              this.draw();

            };

        }

      }

      const init = () =>{

        circleArray = [];
        if (canvas.width <= 400) {
          //Creating 100 circles using a for loop
          for (let i = 0; i < 100; i++) {
              
            let radius = 15;

            //Random Position
            //Stops the circle from being stuck in the sides 
            let x = Math.random() * (canvas.width - radius * 2) + radius;  

            //Stops the circle from being stuck at the top and bottom
            let y = Math.random() * (canvas.height - radius * 2) + radius; 

            //Random Velocity
            let dx = (Math.random() - 0.5) * 4;
            let dy = (Math.random() - 0.5) * 4;

            circleArray.push(new Circle(x, y, dx, dy, radius, '#ff000080'));
              
          }
        } else {
          //Creating 120 circles using a for loop
          for (let i = 0; i < 120; i++) {
              
            let radius = 30;

            //Random Position
            //Stops the circle from being stuck in the sides 
            let x = Math.random() * (canvas.width - radius * 2) + radius;  

            //Stops the circle from being stuck at the top and bottom
            let y = Math.random() * (canvas.height - radius * 2) + radius; 

            //Random Velocity
            let dx = (Math.random() - 0.5) * 4;
            let dy = (Math.random() - 0.5) * 4;

            circleArray.push(new Circle(x, y, dx, dy, radius, '#ff000080'));
              
          }
        }
      }
  
      /**
       * Event Listeners
       */
      
      window.addEventListener('resize', handleResize);

      init();

      animate();
      
    }, []) 

     

    return (

      <div className='project'>

        <div className='pageTitle'>
            <h1 style={{color: '#000000'}}>{Animation2DArray[0].name}</h1>
        </div>

        <canvas style={{backgroundColor: bgRBC }} ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[0].name} repoAddress={Animation2DArray[0].repo} text={Animation2DArray[0].description} />

        <Leva collapsed={true} />

      </div>

    )
    
}

export default RedBloodCells