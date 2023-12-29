import React, { useRef, useEffect, useState } from 'react';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';
import { useControls, folder, Leva } from 'leva';

const RedBloodCells = () => {
  const canvasRef = useRef(null);
  const [isLevaCollapsed, setIsLevaCollapsed] = useState(window.innerWidth <= 400);


  // Leva Control Panel
  const { bgRBC, color, radius, numberOfCircles, circleVelocity } = useControls('Control Panel', {
    Background: folder({
      
      bgRBC: { value: '#ffffff', label: 'Colour' },

    }),
    Circle: folder({
      color: { value: { r: 255, g: 0, b: 0, a: 0.5 }, label: 'Colour' }, // Use an object for color
      radius: { value: 30, label: 'Radius', min: 1, max: 50 },
      numberOfCircles: { value: 100, label: 'Number', min: 1, max: 500 },
      circleVelocity: { value: 1, label: 'Velocity', min: 1, max: 10 },
    }),
  });

  useEffect(() => {
    let canvas = canvasRef.current;
    let c = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize & Reinitialize
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

    // Animate Function
    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    };

    // Empty Array declaration
    let circleArray = [];

    // Circle Class Constructor
    class Circle {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

        this.draw = () => {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          c.strokeStyle = 'black';
          c.stroke();
          c.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`; // Use rgba format
          c.fill();
        };

        this.update = () => {
          if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
          }
          if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
          }
          this.x += this.dx * circleVelocity;
          this.y += this.dy * circleVelocity;
          this.draw();
        };
      }
    }

    const init = () => {
      circleArray = [];

      for (let i = 0; i < numberOfCircles; i++) {
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 4;
        let dy = (Math.random() - 0.5) * 4;

        circleArray.push(new Circle(x, y, dx, dy, radius, color));
      }
    };

    // Event Listeners
    window.addEventListener('resize', handleResize);

    init();

    animate();
  }, [color, radius, numberOfCircles, circleVelocity]);

  return (
    <div className="project">
      <div className="pageTitle">
        <h1 style={{ color: '#000000' }}>{Animation2DArray[0].name}</h1>
      </div>
      <canvas style={{ backgroundColor: bgRBC }} ref={canvasRef}></canvas>
      <Info title={Animation2DArray[0].name} repoAddress={Animation2DArray[0].repo} text={Animation2DArray[0].description} />
      <Leva collapsed={isLevaCollapsed} />
    </div>
  );
};

export default RedBloodCells;
