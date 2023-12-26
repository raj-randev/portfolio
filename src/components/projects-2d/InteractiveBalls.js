import React, { useRef, useEffect } from 'react';
import { useControls, Leva } from 'leva';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';


const InteractiveBalls = () => {
  const canvasRef = useRef(null);

  let mouse = {
    x: undefined,
    y: undefined,
  };

  let maxRadius = 40;
  let circleArray = [];

  const { bgIB} = useControls('Control Panel', {
    bgIB: { value: '#ffffff', label: 'Background Color' },
  });

  const { colorOneControl, colorTwoControl, colorThreeControl, colorFourControl, colorFiveControl } = useControls('Circle Colours', {
    colorOneControl: { label: 'Color One', value: '#801B14', row: 1 },
    colorTwoControl: { label: 'Color Two', value: '#F2E4A4', row: 1 },
    colorThreeControl: { label: 'Color Three', value: '#A19D77', row: 1 },
    colorFourControl: { label: 'Color Four', value: '#2A2B24', row: 1 },
    colorFiveControl: { label: 'Color Five', value: '#E0493F', row: 1 }
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const mouseMovement = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    /**
     * Circle Class Constructor
     */
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
        // Bounce off the right or left side of the screen
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        // Bounce off the top or the bottom of the screen
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
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    const init = () => {
      circleArray = [];
      if (canvas.width <= 400) {
        for (let i = 0; i < 200; i++) {
          let radius = Math.ceil(Math.random() * 10 + 1);
          let x = Math.random() * (canvas.width - radius * 2) + radius;
          let y = Math.random() * (canvas.height - radius * 2) + radius;
          let dx = (Math.random() - 0.5) * 2;
          let dy = (Math.random() - 0.5) * 2;
          circleArray.push(new Circle(x, y, dx, dy, radius));
        }
      } else {
        for (let i = 0; i < 800; i++) {
          let radius = Math.ceil(Math.random() * 10 + 1);
          let x = Math.random() * (canvas.width - radius * 2) + radius;
          let y = Math.random() * (canvas.height - radius * 2) + radius;
          let dx = (Math.random() - 0.5) * 2;
          let dy = (Math.random() - 0.5) * 2;
          circleArray.push(new Circle(x, y, dx, dy, radius));
        }
      }
    };

    /**
     * Event Listeners
     */
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', mouseMovement);

    init();

    /**
     * Animate Function
     */
    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    };

    animate();
  }, [colorOneControl, colorTwoControl, colorThreeControl, colorFourControl, colorFiveControl]);

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
      <Leva collapsed={true} />
    </div>
  );
};

export default InteractiveBalls;

