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

      <div className="process-image-wrapper">
        <div className="process-image-container">
          <img
            className="process-image"
            src='../src/assets/Process.png'
            alt="Process"
          />
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
    </div>
  );
};

export default Funding;
