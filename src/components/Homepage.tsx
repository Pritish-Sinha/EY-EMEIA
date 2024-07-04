import React from 'react';
import backgroundImage from '../assets/Home.png'; 
import bulbImage from '../assets/bulb.png'; 

const Homepage: React.FC = () => {
  return (
    <div className="container">
      <img src={backgroundImage} className="backgroundImage" alt="Background" />
      <div className="content">
        <div className="heading">
          <span className="yellowText">EMEIA</span>
          <div className="innovationContainer">
            Innovation <img src={bulbImage} className="bulbImage" alt="Bulb" />
          </div>
        </div>
        
        <p className="paragraph">
          <span className="boldYellowText">We foster</span> a culture of transparency, creativity and collaboration
          across the EMEIA region, driving impactful innovation that delivers exceptional value to our clients and
          strengthens our market leadership.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
