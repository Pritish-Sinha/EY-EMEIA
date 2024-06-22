import * as React from 'react';
import { useState } from 'react';

interface Leader {
    name: string;
    role: string;
    imageUrl: string;
}

const regionalLeaders: Leader[] = [
    { name: 'Meribeth Banaschik', role: 'Europe West', imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Meribeth.png?csf=1&web=1&e=ebzEYS' },
    { name: 'Elizabeth Whitfield', role: 'EMEIA FSO', imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Elizabeth%20Whitfield.png?csf=1&web=1&e=AkGKTh' },
    { name: 'Laura Atkinson', role: 'UK&I', imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Laura%20Atkinson.png?csf=1&web=1&e=vcBG6k' },
    { name: 'Mateusz Pociask', role: 'CESA', imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Mateusz%20Pociask%201.png?csf=1&web=1&e=xln6rU' },
    { name: 'Guru Malladi', role: 'India', imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Mateusz%20Pociask%201.png?csf=1&web=1&e=xln6rU' },
    { name: 'Lorenzo Congiu', role: 'Nordics', imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Lorenzo%20Congiu.png?csf=1&web=1&e=zxqMjL' }
];

const serviceLineLeaders: Leader[] = [
    {
        name: 'Mikhail Romanov',
        role: 'Consulting',
        imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Romanov%20Mikhail%20c.jpg?csf=1&web=1&e=warq9a'
    },
    {
        name: 'Detmar Ordemann',
        role: 'Assurance',
        imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Detmar%20Ordemann.jpg?csf=1&web=1&e=THNQwE'
    },
    {
        name: 'Paul E Warn',
        role: 'Tax',
        imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Paul%20E%20Warn%20(2).jpg?csf=1&web=1&e=BjEXwT'
    },
    {
        name: 'Bernd Krajnik',
        role: 'SaT Strategic Initiative',
        imageUrl: 'https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Bernd%20Krajnik.jpg?csf=1&web=1&e=fm8tKn'
    }
];

const OurLeaders: React.FC = () => {
    const [showRegional, setShowRegional] = useState<boolean>(true);

    const leaders = showRegional ? regionalLeaders : serviceLineLeaders;

    return (
        <div className="our-leaders">
            <div className="leader-headerstyle">
                <h1>Innovation Leaders</h1>
                <div className="leader-line"></div>
                <div className="leader-tabs">
                    <button 
                        className={`tab ${showRegional ? 'active' : ''}`} 
                        onClick={() => setShowRegional(true)}>
                        Regional Leaders
                    </button>
                    <button 
                        className={`tab ${!showRegional ? 'active' : ''}`} 
                        onClick={() => setShowRegional(false)}>
                        Service Line Leaders
                    </button>
                </div>
            </div>
            <div className="leader-horizontalline"></div>
            <div className="leader-list">
                {leaders.map((leader, index) => (
                    <div key={index} className="leader-item">
                        <div className="leader-image-container">
                            <img src={leader.imageUrl} alt={leader.name} className="leader-image" />
                        </div>
                        <div className="leader-info">
                            <h2>{leader.name}</h2>
                            <p>{leader.role}</p>
                            <div className="underlineleaders"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurLeaders;
