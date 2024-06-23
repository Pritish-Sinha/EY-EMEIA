import * as React from 'react';
import { useState } from 'react';

import MeribethImage from '../assets/Meribeth.png';
import ElizabethImage from '../assets/Elizabeth.png';
import LauraAtkinsonImage from '../assets/LauraAtkinson.png';
import MateuszPociaskImage from '../assets/MateuszPociask.png';
import GuruImage from '../assets/Guru.png';
import LorenzoCongiuImage from '../assets/LorenzoCongiu.png';
import MikhaliImage from '../assets/Mikhali.png';
import DetmarOrdemannImage from '../assets/DetmarOrdemann.png';
import PaulImage from '../assets/Paul.png';
import BerndKrajnikImage from '../assets/BerndKrajnik.png';

interface Leader {
    name: string;
    role: string;
    imageUrl: string;
}

const regionalLeaders: Leader[] = [
    { name: 'Meribeth Banaschik', role: 'EUROPE WEST', imageUrl: MeribethImage },
    { name: 'Elizabeth Whitfield', role: 'EMEIA FSO', imageUrl: ElizabethImage },
    { name: 'Laura Atkinson', role: 'UK&I', imageUrl: LauraAtkinsonImage },
    { name: 'Mateusz Pociask', role: 'CESA', imageUrl: MateuszPociaskImage },
    { name: 'Guru Malladi', role: 'INDIA', imageUrl: GuruImage },
    { name: 'Lorenzo Congiu', role: 'NORDICS', imageUrl: LorenzoCongiuImage }
];

const serviceLineLeaders: Leader[] = [
    {
        name: 'Mikhail Romanov',
        role: 'Consulting',
        imageUrl: MikhaliImage
    },
    {
        name: 'Detmar Ordemann',
        role: 'Assurance',
        imageUrl: DetmarOrdemannImage
    },
    {
        name: 'Paul E Warn',
        role: 'Tax',
        imageUrl: PaulImage
    },
    {
        name: 'Bernd Krajnik',
        role: 'SaT Strategic Initiative',
        imageUrl: BerndKrajnikImage
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
