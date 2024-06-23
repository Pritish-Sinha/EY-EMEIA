import * as React from 'react';
import { useEffect, useState } from 'react';
import teamImage from '../assets/Team.png';
import teamMobileImage from '../assets/Team.png';

const OurTeam: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="our-team">
            <img 
                src={isMobile ? teamMobileImage : teamImage} 
                alt="Team" 
                style={{ width: '100%', height: '800px', objectFit: 'cover', objectPosition: 'center' }} 
            />
        </div>
    );
};

export default OurTeam;
