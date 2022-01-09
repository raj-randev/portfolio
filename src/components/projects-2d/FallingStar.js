import React, { useRef, useEffect } from 'react'
import randomIntFromRange from '../../utilities/randomIntFromRange';
import Animation2DArray from '../database/Animation2DArray';
import Info from '../parts/Info';

const FallingStar = () => {
    
    const canvasRef = useRef(null);

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

        init()

      }

      //Adding gradient to canvas background
      const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);

      backgroundGradient.addColorStop(0, '#171e26');

      backgroundGradient.addColorStop(1, '#3f586b');
        

      /**
       * Animate Function
       */
      
      const animate = () => {

        requestAnimationFrame(animate);

        c.fillStyle = backgroundGradient;

        c.fillRect(0, 0, canvas.width, canvas.height);
      
        backgroundStars.forEach(backgroundStar => {

          backgroundStar.draw();

        })
      
        //Mountain ranges
        createMonutainRange(1, canvas.height - 100, '#3b4551');

        createMonutainRange(2, canvas.height - 200, '#2b3b43');

        createMonutainRange(3, canvas.height - 500, '#26333e');

        //Ground
        c.fillStyle = '#182028';

        c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
      
        //Big shooting stars
        stars.forEach((star, index) => {

          star.update();

          if (star.radius === 0) {

            stars.splice(index, 1);

          }

        });
      
        //smaller stars
        miniStars.forEach( (miniStar, index) => {

          miniStar.update();
          if (miniStar.ttl === 0) {

            miniStars.splice(index, 1);

          }

        });
      
        ticker++
        
        //randomly spawn stars
        if (ticker % randomSpornRate === 0) {

          const radius = 24;

          const x = Math.max(Math.random() * canvas.width - radius);

          stars.push(new Star(x, -100, radius, "#e3eaef"));

        }

      }


      /**
       * Star Class Constructor
       */

      class Star {

        constructor(x, y, radius, color) {
  
          this.x = x
          this.y = y
          this.radius = radius
          this.color = color
          this.velocity = {
  
            x: randomIntFromRange(-5, 5),
            y: randomIntFromRange(-15, 15)
  
          }
          this.friction = 0.8
          this.gravity = 1
  
        }
          shatter = () => {
  
            this.radius -= 8
  
            for (let i = 0; i < 8; i++) {
  
              miniStars.push(new MiniStar(this.x, this.y, 2))
  
            }
  
          }
  
          draw = () => {
  
            c.save()
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            c.fillStyle = this.color
            c.shadowColor = '#e3eaef'
            c.shadowBlur = 20
            c.fill()
            c.closePath()
            c.restore()
  
          }
  
          update = () => {
  
            this.draw()
          
            if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
              this.velocity.y = -this.velocity.y * this.friction
              this.shatter()
            } else {
              this.velocity.y += this.gravity
            }
  
            this.x += this.velocity.x
            this.y += this.velocity.y
          
            if(this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0) {
  
              this.velocity.x = -this.velocity.x
  
              this.shatter()
  
            }
  
          }
  
        }
      
      
      /**
       * Mini Star Class Constructor
       */  

      class MiniStar {
  
        constructor(x, y, radius, color) {
  
          this.x = x
          this.y = y
          this.radius = radius
          this.color = color
          this.velocity = {
  
            x: randomIntFromRange(-5, 5),
            y: randomIntFromRange(-15, 15)
  
          }
          this.friction = 0.8
          this.gravity = 0.1
          this.ttl = 100
          this.opacity = 1
        }
          draw = () => {
  
            c.save()
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = `rgba(227,234, 239, ${this.opacity})`
            c.shadowColor = '#e3eaef'
            c.shadowBlur = 20
            c.fill()
            c.closePath()
            c.restore()
  
          }
  
          update = () => {
  
            this.draw()
          
            if (this.y + this.radius + this.velocity.y > canvas.height - groundHeight) {
              this.velocity.y = -this.velocity.y * this.friction
            } else {
              this.velocity.y += this.gravity
            }
          
            this.x += this.velocity.x
            this.y += this.velocity.y
            this.ttl -= 1
            this.opacity -= 1 / this.ttl
          }
      }
      
      /**
       * Mountain range function
       */

      const createMonutainRange = (numberOfMountains, height, colour ) => {
  
        for(let i = 0; i < numberOfMountains; i++) {
  
          const mountainWidth = canvas.width / numberOfMountains
  
          c.beginPath()
          c.moveTo(i * mountainWidth, canvas.height)
          c.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height)
          c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height)
          c.lineTo(i * mountainWidth - 325, canvas.height)
          c.fillStyle = colour
          c.fill()
          c.closePath()
  
        }
  
      }
      
      let stars
      let miniStars
      let backgroundStars
      let ticker = 0
      let randomSpornRate = randomIntFromRange(25, 200)
      let groundHeight = 100
  
      const init = () => {
  
        stars = []
        miniStars = []
        backgroundStars = []
        
        for (let i = 0; i < 150; i++) {
  
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const radius = Math.random() * 3
  
          backgroundStars.push(new Star(x, y, radius, 'white'))
  
        }
  
      }
      

      /**
       * Event Listeners
       */

      window.addEventListener('resize', handleResize);
      
      init();

      animate();
      
    }, []); 
    
    

    return (

      <div className='project'>

        <div className='pageTitle'>
              <h1 style={{color: '#ffffff'}}>{Animation2DArray[2].name}</h1>
        </div>

        <canvas ref={canvasRef} ></canvas>

        <Info title={Animation2DArray[2].name} repoAddress={Animation2DArray[2].repo} text={Animation2DArray[2].description} />

      </div>

  )

}

export default FallingStar