import * as React from 'react';
import T1 from '../assets/maribeth.png';  
import T2 from '../assets/nataliya.png';  
import Map from '../assets/map.png';
import Button from '../assets/button.png';

interface TeamMember {
    name: string;
    role: string;
    role2: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Meribeth Banaschik',
        role: 'EMEIA Innovation',
        role2: 'Leader',
        imageUrl: T1
    },
    {
        name: 'Nataliya Ilina',
        role: 'EMEIA Innovation ',
        role2: 'Program Lead',
        imageUrl: T2
    }
];

const OurTeam: React.FC = () => {
    return (
        <div className="our-team">
            <div className="wave-container">
                <svg width="100%" height="150px" viewBox="0 0 180 15" preserveAspectRatio="none" className="wave-svg">
                    <path d="M0 10 Q 50 0 100 10 T 200 10 V 20 H 0 Z" fill="#2E2E38" />
                </svg>
            </div>
            <div className="header">
                <h1>Our Team</h1>
                <img src={Button} alt="Dropdown" className="dropdown-icon" />
            </div>
            <div className="map-background">
                <img src={Map} alt="Map Background" className="map-image" />
                {teamMembers.map((member, index) => (
                    <div key={index} className={`team-member member-${index + 1}`}>
                        <div className="image-container">
                            <img src={member.imageUrl} alt={member.name} className="member-image" />
                        </div>
                        <div className="member-info">
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                            <p>{member.role2}</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
