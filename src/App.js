import './App.css';
import { Fragment } from 'react';
import NavHolder from './components/parts/NavHolder';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Animation2D from './components/pages/Animation2D';
import Animation3D from './components/pages/Animation3D';
import Websites from './components/pages/Websites';
import RedBloodCells from './components/projects-2d/RedBloodCells';
import CircularSpins from './components/projects-2d/CircularSpins';
import Gravity from './components/projects-2d/Gravity';
import FallingStar from './components/projects-2d/FallingStar';
import CollisionDetector from './components/projects-2d/CollisionDetector';
import GalacticSwirl from './components/projects-2d/GalacticSwirl';
import InteractiveBalls from './components/projects-2d/InteractiveBalls';
import RainbowParticles from './components/projects-2d/RainbowParticles';
import RepelParticles from './components/projects-2d/RepelPartcles';
import SineWaves from './components/projects-2d/SineWaves';
import BoxWobble from './components/projects-3d/BoxWobble';
import SpinningBall from './components/projects-3d/SpinningBall'
import FoxAnimate from './components/projects-3d/FoxAnimate';
import ParticleSystem from './components/projects-3d/ParticleSystem';
import ParticleWaves from './components/projects-3d/ParticleWaves';
import RoomRefletion from './components/projects-3d/RoomReflection';
import Space from './components/projects-3d/Space';
import Terrain from './components/projects-3d/Terrain';

function App() {
  return (
    <Fragment>
      <Router>
        
        <NavHolder />
          <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/animation-2d/" element={<Animation2D />} />
              <Route exact path='/animation-2d/red-blood-cells' element={<RedBloodCells/>} />
              <Route exact path='/animation-2d/gravity' element={<Gravity />} />
              <Route exact path='/animation-2d/falling-star' element={<FallingStar />} />
              <Route exact path='/animation-2d/circular-spins' element={<CircularSpins />} />
              <Route exact path='/animation-2d/collision-detector' element={<CollisionDetector />} />
              <Route exact path='/animation-2d/galactic-swirl' element={<GalacticSwirl />} />
              <Route exact path='/animation-2d/interactive-balls' element={<InteractiveBalls />} />
              <Route exact path='/animation-2d/rainbow-particles' element={<RainbowParticles />} />
              <Route exact path='/animation-2d/repel-particles' element={<RepelParticles />} />
              <Route exact path='/animation-2d/sine-waves' element={<SineWaves/>} />
            <Route exact path="/animation-3d/" element={<Animation3D />} />
              <Route exact path='/animation-3d/box-wobble' element={<BoxWobble/>} />              
              <Route exact path='/animation-3d/spinning-ball' element={<SpinningBall/>} />
              <Route exact path='/animation-3d/animated-fox' element={<FoxAnimate/>} />
              <Route exact path='/animation-3d/particle-system' element={<ParticleSystem/>} />
              <Route exact path='/animation-3d/particle-wave' element={<ParticleWaves/>} />
              <Route exact path='/animation-3d/room-reflection' element={<RoomRefletion/>} />
              <Route exact path='/animation-3d/space' element={<Space/>} />
              <Route exact path='animation-3d/terrain' element={<Terrain/>} />
            <Route exact path="/websites/" element={<Websites />} />
          </Routes> 
          </main>
      </Router>

    </Fragment>
  );
}

export default App;
