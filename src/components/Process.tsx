import * as React from 'react';

const Funding: React.FC = () => {
  return (
    <div className="process">
      <div className="process-header-container">
        <h1 className="process-heading">
          Global <span className="process-highlight">Innovation</span> Funding Process Overview
          </h1>
        <div className="process-line"></div>
      </div>

      <div className="process-video-wrapper">
        <video
          className="process-video"
          src="https://sites.ey.com/:v:/r/sites/EMEIA_Innovation_site/Images1/EMEIA%20Innovation_Move%20away%20from%20PPTs%2013May2024.mp4?csf=1&web=1&e=KEJ2uN"
          autoPlay
          loop
          muted
          controls
        ></video>
        <div className="process-overlay-text">
          <p>
            Looking for <span className="process-highlight">funding</span> for your
            <p>innovation project?</p>
            <div className="process-line"></div>
          </p>
          <a href="https://www.your-link.com" className="process-cta-button">
            Click Here to Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Funding;
