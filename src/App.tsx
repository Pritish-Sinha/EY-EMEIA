import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import OurLeaders from './components/OurLeaders';
import Process from './components/Process';
import Regions from './components/Regions';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div id="Homepage">
        <Homepage />
      </div>
      <div id="OurTeam">
        <OurTeam />
      </div>
      <div id="OurLeaders">
        <OurLeaders />
      </div>
      <div id="Process">
        <Process />
      </div>
      <div id="Regions">
        <Regions />
      </div>
      <div id="Gallery">
        <Gallery />
      </div>
    </>
  );
};

export default App;
