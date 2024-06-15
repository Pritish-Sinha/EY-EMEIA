// src/App.js
import React from 'react';
import './App.css';
import OurTeam from './components/OurTeam';
import OurLeaders from './components/OurLeaders';
import FundingProcess from './components/FundingProcess';
import Regions from './components/Regions';
import VideoGrid from './components/VideoGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Website</h1>
      </header>
      <main>
        <OurTeam />
        <OurLeaders/>
        <FundingProcess/>
        <Regions/>
        <VideoGrid/>
      </main>
    </div>
  );
}

export default App;
