import * as React from 'react';
import R1 from '../assets/r1.png';
import R2 from '../assets/r2.png';

const Regions: React.FC = () => {
  return (
    <div>
      <div className='region-flex'>
        <h2 className='Region-h2'>Regions</h2>
        <div className="regions-line"></div>
    </div>
    <div className="region-header-container">
        <div className="region-line"></div>
      </div>

      <div className="Region-container">
        <img className="Region-img" src={R1} alt="Region1" />
        <div className="Region-border">
          <h3 className='headerregion3'><span className='Region-span'>EMEIA FSO</span> Innovation</h3>
          <p className="regiontextpara">
          Designed to help apply innovation to our offerings, supporting EY to future-proof, stay relevant and be competitive.
          </p>
          
          <a href="https://www.ey.com/en_uk/people/ey-emeia-fso" className="region-cta-button">
              Click Here to Know More
            </a>
        </div>
      </div>
      <div className="Region-container">
        <div className="Region-border">
        <h3 className='headerregion3'><span className='Region-span'>EUROPE WEST</span> Innovation</h3>
          <p className="regiontextpara">
          Multidisciplinary and multicultural team which breathes innovation and works across all geographies, Service Lines and sectors to develop new technologies, strategies and solutions that can better position EY and our clients for the future.
          </p>
          <a href="https://www.youtube.com/watch?v=ysh5WYk9DmM" className="region-cta-button">
              Click Here to Know More
            </a>
        </div>
        <img className="Region-img" src={R2} alt="Region2" />
      </div>
    </div>
  );
}

export default Regions;
