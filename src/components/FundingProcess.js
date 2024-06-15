
import React from 'react';
import './FundingProcess1.css';

const FundingProcess = () => {
  return (
    <div className="funding-process">
      <h2>Global Innovation Funding Process Overview</h2>
      <div className="video-container">
        <video controls>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p>Looking for funding for your innovation project?</p>
      <a href="#more-info" className="cta-button">Click Here to Know More</a>
    </div>
  );
};

export default FundingProcess;
