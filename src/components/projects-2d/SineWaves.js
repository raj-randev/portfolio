import React, { useRef, useEffect } from 'react';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const SineWaves = () => {

    const canvasRef = useRef(null);

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

      }
      
      //Wave Properties
      const wave = {

        y: canvas.height /2,
        length: 0.008,
        amplitude: 285,
        frequency: 0.046,

      }

      //Color Properties
      const strokeColor = {

        h:94,
        s:114,
        l:35

      }

      //Background Color
      const background = {

        r:0,
        g:0,
        b:0,
        a:0.15

      }

      let increment = wave.frequency


      /**
       * Animate Function
       */

      const animate = () => {

        requestAnimationFrame(animate);

        c.fillStyle = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`;

        c.fillRect(0, 0, canvas.width, canvas.height);
        
        c.beginPath();

        //Starts line from the center of the height of the canvas
        c.moveTo(0, canvas.height / 2);
      
        for (let i = 0; i < canvas.width; i++){

          c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));

        }
      
        //Color of line
        c.strokeStyle = `hsl(${strokeColor.h * Math.sin(increment)}, ${strokeColor.s}%, ${strokeColor.l}%)`;

        c.stroke();

        increment += wave.frequency;

      }
      

      /**
       * Event Listeners
       */
      
      window.addEventListener('resize', handleResize);
      
      animate();
      
    }, []); 

    return (

      <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation2DArray[9].name}</h1>
        </div>

        <canvas ref={canvasRef} ></canvas>

        <Info text={Animation2DArray[9].description} />

      </div>

  )

}

export default SineWaves