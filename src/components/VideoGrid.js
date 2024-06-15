// VideoGrid.js
import React, { useState } from 'react';
import './VideoGrid1.css';

const VideoGrid = () => {
    const [playing, setPlaying] = useState(Array(4).fill(false));

    const handlePlay = (index) => {
        const newPlaying = [...playing];
        newPlaying[index] = true;
        setPlaying(newPlaying);
    };

    return (
        <div className="video-grid-container">
            <h2 className="video-grid-heading">Videos</h2>
            <div className="video-grid">
                {['SIG Funding', 'Immersive experiences', 'Placeholder', 'Placeholder'].map((title, index) => (
                    <div className="video-wrapper" key={index}>
                        <div className={`video-overlay ${playing[index] ? 'hide' : ''}`}>
                            <div className="video-text">{title}</div>
                            <button className="play-button" onClick={() => handlePlay(index)}>▶</button>
                        </div>
                        <video
                            className={`video ${playing[index] ? 'playing' : ''}`}
                            controls={playing[index]}
                            onPlay={() => handlePlay(index)}
                        >
                            <source src="your-video-url-here" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;
