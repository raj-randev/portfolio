import React, { useRef, useEffect } from 'react';
//import { GUI } from 'dat.gui'
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const SineWaves = () => {

    const canvasRef = useRef(null);

    useEffect(() =>{

      //const gui = new GUI()
      //gui.close();

      let canvas = canvasRef.current;
      
      let c = canvas.getContext('2d');

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const handleResize = () => {

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

      }
      
      const wave = {

        y: canvas.height /2,
        length: 0.008,
        amplitude: 285,
        frequency: 0.046,

      }

      //const waveFolder = gui.addFolder('Wave')
      //waveFolder.add(wave, 'y', 0, canvas.height);
      //waveFolder.add(wave, 'length', -0.01, 0.01);
      //waveFolder.add(wave, 'amplitude', -300, 300);
      //waveFolder.add(wave, 'frequency', -0.01, 1);
      //waveFolder.open()

      const strokeColor = {

        h:94,
        s:114,
        l:35

      }
      
      //const strokeFolder = gui.addFolder('Stroke')
      //strokeFolder.add(strokeColor, 'h', 0, 225);
      //strokeFolder.add(strokeColor, 's', 0, 100);
      //strokeFolder.add(strokeColor, 'l', 0, 100);
      //strokeFolder.open()

      const background = {

        r:0,
        g:0,
        b:0,
        a:0.15

      }
  
      //const backgroundFolder = gui.addFolder('Background')
      //backgroundFolder.add(background, 'r', 0, 255);
      //backgroundFolder.add(background, 'g', 0, 255);
      //backgroundFolder.add(background, 'b', 0, 255);
      //backgroundFolder.add(background, 'a', 0, 1);
      //backgroundFolder.open();

      let increment = wave.frequency

      const animate = () => {

        requestAnimationFrame(animate);

        c.fillStyle = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`;

        c.fillRect(0, 0, canvas.width, canvas.height);
        
        c.beginPath();

        c.moveTo(0, canvas.height / 2);
      
        for (let i = 0; i < canvas.width; i++){

          c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));

        }
      
        c.strokeStyle = `hsl(${strokeColor.h * Math.sin(increment)}, ${strokeColor.s}%, ${strokeColor.l}%)`;

        c.stroke();

        increment += wave.frequency;

      }
      
      window.addEventListener('resize', handleResize);
      
      animate();
      
    }, []); 

    return (

      <div className='project'>

        <div className='pageTitle'>
          <h1 style={{color: '#ffffff'}}>{Animation2DArray[9].name}</h1>
        </div>

        <canvas ref={canvasRef} ></canvas>

        <Info text={Animation2DArray[0].description} />

      </div>

  )

}

export default SineWaves