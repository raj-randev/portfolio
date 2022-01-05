import React, { useRef, useEffect } from 'react'
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const InteractiveBalls = () => {
    
    const canvasRef = useRef(null);

    const { bgIB } = useControls('Control Panel', { 

      bgIB: { value: '#ffffff', label: 'Background Color' },

    }) 

    useEffect(() =>{

      let canvas = canvasRef.current;

      let c = canvas.getContext('2d');

      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const handleResize = () => {

        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        init();

      }

      const mouseMovement = (event) => {

        mouse.x = event.x;
        mouse.y = event.y;

      }

      const animate = () => {

        requestAnimationFrame(animate);
    
        c.clearRect(0, 0, canvas.width, canvas.height);
    
        for (let i = 0; i < circleArray.length; i++) {

            circleArray[i].update();

        }
        
        
      }
      
      let mouse = {

        x: undefined,
        y: undefined
  
      }
  
      let maxRadius = 40;
  
  
      let colorArray = [
  
      '#801B14', 
      '#F2E4A4', 
      '#A19D77', 
      '#2A2B24', 
      '#E0493F'   
  
      ];
  
      let circleArray = [];
  
      function Circle(x, y, dx, dy, radius){
  
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        
        this.draw = function(){
  
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
  
        }
        
        this.update = function() {
  
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0){
  
            this.dx = -this.dx;
  
        }
        
        if (this.y + this.radius > canvas.height || this.y - this.radius< 0){
  
            this.dy = -this.dy;
  
        }
  
        this.x += this.dx;
        this.y += this.dy;
            
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < maxRadius){
  
            this.radius += 1;
  
          }
        } else if (this.radius > this.minRadius) {
  
          this.radius -= 1;
  
        }   
            
        this.draw(); 
  
        }
  
      }
  
      const init = () => {
      
        circleArray = [];
  
        for (let i = 0; i < 800; i++){
  
                let radius = Math.ceil(Math.random() * 10 + 1);
                let x = Math.random() * (canvas.width - radius * 2) +radius;
                let y = Math.random() * (canvas.height - radius * 2) +radius;
                let dx = (Math.random() - 0.5) * 2;
                let dy = (Math.random() - 0.5) * 2;
                circleArray.push(new Circle(x, y, dx, dy, radius));
  
        }
  
      }
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', mouseMovement);

      init();

      animate();
      
    }, []) 


    return (

        <div className='project'>

          <div className='pageTitle'>
            <h1 style={{color: '#000000'}}>{Animation2DArray[6].name}</h1>
          </div>

          <canvas style={{backgroundColor: bgIB}} ref={canvasRef} ></canvas>

          <Info text={Animation2DArray[0].description} />

          <Leva collapsed={true}/>

        </div>

    )
    
}

export default InteractiveBalls