import React, { useRef, useEffect, useState } from 'react';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';
import { useControls, Leva, folder } from 'leva';
import hexToRgb from '../../utilities/hexToRGB';

const SineWaves = () => {

    const canvasRef = useRef(null);
    const [isLevaCollapsed, setIsLevaCollapsed] = useState(window.innerWidth <= 400);

    const { 
      
      bgRepP, 
      backgroundAlpha, 
      waveLength, 
      waveAmplitude, 
      waveFrequency,
     
    } = useControls('Control Panel', { 

      Background: folder({

        bgRepP: { value: '#000000', label: 'Colour' },
        backgroundAlpha: { label: 'Alpha', value: 0.15, min: 0, max: 1, step: 0.05}

      }),

      Wave: folder({

        waveLength: { label: 'Length', value: 0.008, min: 0, max: 1, step: 0.001 },
        waveAmplitude: { label: 'Amplitude', value: 285, min: 0, max: 500, step: 1 },
        waveFrequency: { label: 'Frequency', value: 0.046, min: 0, max: 1, step: 0.001 },

      }),
      
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

        if (window.innerWidth <= 400) {
          setIsLevaCollapsed(true);
        } else {
          setIsLevaCollapsed(false);
        }

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

      }
      
      //Wave Properties
      const wave = {

        y: canvas.height /2,
        length: waveLength,
        amplitude: waveAmplitude,
        frequency: waveFrequency,

      }

      //Color Properties
      const strokeColor = {

        h:94,
        s:114,
        l:35

      }

      //Background Color
      

      let increment = wave.frequency


      /**
       * Animate Function
       */

      const animate = () => {

        requestAnimationFrame(animate);

        c.fillStyle = `rgba(${hexToRgb(bgRepP)}, ${backgroundAlpha})`;

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
      
    }, [
      bgRepP,
      backgroundAlpha,
      waveLength,
      waveAmplitude,
      waveFrequency,
    ]); 

    return (

      <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation2DArray[9].name}</h1>
        </div>

        <canvas ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[9].name} repoAddress={Animation2DArray[9].repo} text={Animation2DArray[9].description} />

        <Leva collapsed={isLevaCollapsed}/>

      </div>

  )

}

export default SineWaves