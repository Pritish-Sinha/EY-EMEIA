import React, { useState, useEffect, useRef, FC } from 'react';
import PlayButtonImage from '../assets/play.png';
import ScrollToTopImage from '../assets/Vector.png';

interface Video {
  src: string;
  thumbnail: string;
  topic: string;
  subtopic: string;
}

const videos: Video[] = [
  {
    src: 'https://www.bhagirathienterprises.in/vid.mp4',
    thumbnail: 'https://img.youtube.com/vi/kQtLEJyVZgA/hqdefault.jpg',
    topic: 'Unlocking the mystery of',
    subtopic: 'SIG Funding',
  },
  {
    src: 'https://www.bhagirathienterprises.in/vid.mp4',
    thumbnail: 'https://img.youtube.com/vi/kQtLEJyVZgA/hqdefault.jpg',
    topic: 'Immersive experience',
    subtopic: 'showcase session',
  },
  {
    src: 'https://www.bhagirathienterprises.in/vid.mp4',
    thumbnail: 'https://img.youtube.com/vi/kQtLEJyVZgA/hqdefault.jpg',
    topic: 'Placeholder',
    subtopic: 'Temp',
  },
  {
    src: 'https://www.bhagirathienterprises.in/vid.mp4',
    thumbnail: 'https://img.youtube.com/vi/kQtLEJyVZgA/hqdefault.jpg',
    topic: 'Placeholder',
    subtopic: 'Temp',
  },
];

interface VideoContainerProps {
  video: Video;
  isBlurred: boolean;
  handlePlayButtonClick: () => void;
}

const VideoContainer: FC<VideoContainerProps> = ({ video, isBlurred, handlePlayButtonClick }) => (
  <div className={`video-container ${isBlurred ? 'blurred' : ''}`}>
    <div className="video-overlay">
      <div className="video-text">
        <span className="topic">{video.topic}</span>
        <br />
        <span className="subtopic">{video.subtopic}</span>
      </div>
      {isBlurred ? (
        <>
          <img
            src={video.thumbnail}
            alt={`${video.topic} thumbnail`}
            className="video-thumbnail"
          />
          <img
            src={PlayButtonImage}
            alt="Play Button"
            className="play-button"
            onClick={handlePlayButtonClick}
          />
        </>
      ) : (
        <video width="600" height="400" controls>
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  </div>
);

const Gallery: FC = () => {
  const [blurredVideos, setBlurredVideos] = useState<boolean[]>([true, true, true, true]);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const videoGridRef = useRef<HTMLDivElement>(null);

  const handlePlayButtonClick = (index: number) => {
    setBlurredVideos((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsButtonVisible(true);
          } else {
            setIsButtonVisible(false);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (videoGridRef.current) {
      observer.observe(videoGridRef.current);
    }

    return () => {
      if (videoGridRef.current) {
        observer.unobserve(videoGridRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoGridRef} className="video-grid-component">
      <div className="header-container">
        <h1 className="header-title">Videos</h1>
        <div className="header-line"></div>
      </div>
      <div className="video-grid-container">
        {videos.map((video, index) => (
          <VideoContainer
            key={index}
            video={video}
            isBlurred={blurredVideos[index]}
            handlePlayButtonClick={() => handlePlayButtonClick(index)}
          />
        ))}
      </div>
      {isButtonVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src={ScrollToTopImage} alt="Up Button" />
        </button>
      )}
    </div>
  );
};

export default Gallery;
