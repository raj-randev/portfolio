import React, { useRef, useEffect, useState } from 'react';
import { useControls, folder, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const InteractiveBalls = () => {

  const canvasRef = useRef(null);
  const circleArrayRef = useRef([]);
  const [isLevaCollapsed, setIsLevaCollapsed] = useState(window.innerWidth <= 400);


  const { 
    
    bgIB,
    colorOneControl,
    colorTwoControl,
    colorThreeControl,
    colorFourControl,
    colorFiveControl,
    numCircles, 
    maxRadius, 
    maxVelocity
   
  } = useControls('Control Panel', {

    Background: folder({
      
      bgIB: { value: '#ffffff', label: 'Colour' },

    }),
    Circles: folder({
      
      Colour: folder({
      
        colorOneControl: { label: 'One', value: '#801B14', row: 1 },
        colorTwoControl: { label: 'Two', value: '#F2E4A4', row: 1 },
        colorThreeControl: { label: 'Three', value: '#A19D77', row: 1 },
        colorFourControl: { label: 'Four', value: '#2A2B24', row: 1 },
        colorFiveControl: { label: 'Five', value: '#E0493F', row: 1 },
  
      }),

      Configuration: folder({
      
        numCircles: { label: 'Number', value: 100, step: 1, min: 1, max: 150 },
        maxRadius: { label: 'Max Radius', value: 20, step: 1, min: 1, max: 30 },
        maxVelocity: { label: 'Max Velocity', value: 1, step: 0.1, min: 0.5, max: 10 },
  
      }),

    }),
  });

  useEffect(() => {
    let canvas = canvasRef.current;
    let c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let colorArray = [
      colorOneControl,
      colorTwoControl,
      colorThreeControl,
      colorFourControl,
      colorFiveControl,
    ];

    let mouse = {
      x: undefined,
      y: undefined,
    };

    let maxRadiusGrowth = 40; 

    const handleResize = () => {

      if (window.innerWidth <= 400) {
        setIsLevaCollapsed(true);
      } else {
        setIsLevaCollapsed(false);
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const mouseMovement = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadiusGrowth) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    const init = () => {
      circleArrayRef.current = [];
      if (canvas.width <= 400) {
        for (let i = 0; i < numCircles; i++) {
          let radius = Math.ceil(Math.random() * maxRadius + 1);
          let x = Math.random() * (canvas.width - radius * 2) + radius;
          let y = Math.random() * (canvas.height - radius * 2) + radius;
          let dx = (Math.random() - 0.5) * maxVelocity;
          let dy = (Math.random() - 0.5) * maxVelocity;
          circleArrayRef.current.push(new Circle(x, y, dx, dy, radius));
        }
      } else {
        for (let i = 0; i < numCircles; i++) {
          let radius = Math.ceil(Math.random() * maxRadius + 1);
          let x = Math.random() * (canvas.width - radius * 2) + radius;
          let y = Math.random() * (canvas.height - radius * 2) + radius;
          let dx = (Math.random() - 0.5) * maxVelocity;
          let dy = (Math.random() - 0.5) * maxVelocity;
          circleArrayRef.current.push(new Circle(x, y, dx, dy, radius));

        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', mouseMovement);

    init();

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < circleArrayRef.current.length; i++) {
        circleArrayRef.current[i].update();
      }
    };

    animate();
  }, [
    colorOneControl,
    colorTwoControl,
    colorThreeControl,
    colorFourControl,
    colorFiveControl,
    numCircles,
    maxRadius,
    maxVelocity,
  ]);

  return (
    <div className="project">
      <div className="pageTitle">
        <h1 style={{ color: '#000000' }}>{Animation2DArray[6].name}</h1>
      </div>
      <canvas style={{ backgroundColor: bgIB }} ref={canvasRef}></canvas>
      <Info
        title={Animation2DArray[6].name}
        repoAddress={Animation2DArray[6].repo}
        text={Animation2DArray[6].description}
      />
      <Leva collapsed={isLevaCollapsed} />
    </div>
  );
};

export default InteractiveBalls;

