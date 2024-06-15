// Regions.js
import React from 'react';
import './Regions1.css'; 
const Regions = () => {
    return (
        <div className="regions-container">
            <h2 className="regions-heading">Regions</h2>
            <div className="region">
                <div className="image-container">
                    <img src="your-image-url-here" alt="EMEIA FSO Innovation" className="region-image" />
                </div>
                <div className="text-container">
                    <h3 className="region-subheading">EMEIA FSO Innovation.</h3>
                    <p className="region-description">
                        Designed to help apply innovation to our offerings, supporting EY to future-proof, stay relevant and be competitive.
                    </p>
                    <button className="explore-button">Click Here to Explore</button>
                </div>
            </div>
            <div className="region">
                <div className="image-container">
                    <img src="your-image-url-here" alt="Europe West Innovation Team" className="region-image" />
                </div>
                <div className="text-container">
                    <h3 className="region-subheading">Europe West Innovation Team.</h3>
                    <p className="region-description">
                        Multidisciplinary and multicultural team which breathes innovation and works across all geographies, Service Lines and sectors to develop new technologies, strategies and solutions that can better position EY and our clients for the future.
                    </p>
                    <button className="explore-button">Click Here to Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Regions;
