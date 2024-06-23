import * as React from 'react';
import { useState } from 'react';

interface Leader {
    name: string;
    role: string;
    imageUrl: string;
}

const regionalLeaders: Leader[] = [
    { name: 'Meribeth Banaschik', role: 'EUROPE WEST', imageUrl: '../src/assets/Meribeth.png' },
    { name: 'Elizabeth Whitfield', role: 'EMEIA FSO', imageUrl: '../src/assets/Elizabeth.png' },
    { name: 'Laura Atkinson', role: 'UK&I', imageUrl: '../src/assets/LauraAtkinson.png' },
    { name: 'Mateusz Pociask', role: 'CESA', imageUrl: '../src/assets/MateuszPociask.png' },
    { name: 'Guru Malladi', role: 'INDIA', imageUrl: '../src/assets/Guru.png' },
    { name: 'Lorenzo Congiu', role: 'NORDICS', imageUrl: '../src/assets/LorenzoCongiu.png' }
];

const serviceLineLeaders: Leader[] = [
    {
        name: 'Mikhail Romanov',
        role: 'Consulting',
        imageUrl: '../src/assets/Mikhali.png'
    },
    {
        name: 'Detmar Ordemann',
        role: 'Assurance',
        imageUrl: '../src/assets/DetmarOrdemann.png'
    },
    {
        name: 'Paul E Warn',
        role: 'Tax',
        imageUrl: '../src/assets/Paul.png'
    },
    {
        name: 'Bernd Krajnik',
        role: 'SaT Strategic Initiative',
        imageUrl: '../src/assets/BerndKrajnik.png'
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
