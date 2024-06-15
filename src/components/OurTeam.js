import React from 'react';
import './OurTeam1.css';

const teamMembers = [
  {
    name: 'Meribeth Banaschik',
    role: 'EMEIA - Innovation Leader',
    imageUrl: 'https://via.placeholder.com/150' // Replace with actual image URL
  },
  {
    name: 'Nataliya Ilina',
    role: 'EMEIA - Innovation Program Lead',
    imageUrl: 'https://via.placeholder.com/150' // Replace with actual image URL
  }
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
