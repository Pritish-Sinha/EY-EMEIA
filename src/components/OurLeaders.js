// src/components/OurLeaders.js
import React, { useState } from 'react';
import './OurLeaders1.css';

const regionalLeaders = [
  { name: 'Meribeth Banaschik', role: 'Europe West', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Elizabeth Whitfield', role: 'EMEIA FSO', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Laura Atkinson', role: 'UK&I', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Mateusz Pociask', role: 'CESA', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Guru Malladi', role: 'India', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Lorenzo Congiu', role: 'Nordics', imageUrl: 'https://via.placeholder.com/150' }
];

const serviceLineLeaders = [
  { name: 'Leader 1', role: 'Role 1', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Leader 2', role: 'Role 2', imageUrl: 'https://via.placeholder.com/150' },
  // Add more service line leaders here
];

const OurLeaders = () => {
  const [activeTab, setActiveTab] = useState('regional');

  return (
    <div className="our-leaders">
      <h2>Innovation Leaders</h2>
      <div className="tabs">
        <button className={activeTab === 'regional' ? 'active' : ''} onClick={() => setActiveTab('regional')}>
          Regional Leaders
        </button>
        <button className={activeTab === 'service' ? 'active' : ''} onClick={() => setActiveTab('service')}>
          Service Line Leaders
        </button>
      </div>
      <div className="leaders-content">
        {activeTab === 'regional' && (
          <div className="team-members">
            {regionalLeaders.map((leader, index) => (
              <div key={index} className="team-member">
                <img src={leader.imageUrl} alt={leader.name} className="team-member-image" />
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'service' && (
          <div className="team-members">
            {serviceLineLeaders.map((leader, index) => (
              <div key={index} className="team-member">
                <img src={leader.imageUrl} alt={leader.name} className="team-member-image" />
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurLeaders;
