import * as React from 'react';

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
        src: 'https://scontent.fdel3-4.fna.fbcdn.net/v/t15.5256-10/436552705_356012543755405_1786020686061777962_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2YCfRb0JMsEQ7kNvgH6DKCa&_nc_ht=scontent.fdel3-4.fna&oh=00_AYBxVzJkMuKdvLUbzKI8pl5xKNCRLwn_SDd9ha13GBCU3A&oe=667C5E58',
        thumbnail: 'https://img.youtube.com/vi/kQtLEJyVZgA/hqdefault.jpg',
        topic: 'Immersive experience',
        subtopic: 'showcase session',
    },
    {
        src: 'https://scontent.fdel3-4.fna.fbcdn.net/v/t15.5256-10/436552705_356012543755405_1786020686061777962_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2YCfRb0JMsEQ7kNvgH6DKCa&_nc_ht=scontent.fdel3-4.fna&oh=00_AYBxVzJkMuKdvLUbzKI8pl5xKNCRLwn_SDd9ha13GBCU3A&oe=667C5E58',
        thumbnail: 'https://img.youtube.com/vi/kQtLEJyVZgA/hqdefault.jpg',
        topic: 'Placeholder',
        subtopic: 'Temp',
    },
    {
        src: 'https://scontent.fdel3-4.fna.fbcdn.net/v/t15.5256-10/436552705_356012543755405_1786020686061777962_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2YCfRb0JMsEQ7kNvgH6DKCa&_nc_ht=scontent.fdel3-4.fna&oh=00_AYBxVzJkMuKdvLUbzKI8pl5xKNCRLwn_SDd9ha13GBCU3A&oe=667C5E58',
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

const VideoContainer: React.FC<VideoContainerProps> = ({ video, isBlurred, handlePlayButtonClick }) => (
    <div className={`gallery-video-container ${isBlurred ? 'blurred' : ''}`}>
        <div className="gallery-video-overlay">
            <div className="gallery-video-text">
                <span className="gallery-topic">{video.topic}</span>
                <br />
                <span className="gallery-subtopic">{video.subtopic}</span>
            </div>
            {isBlurred ? (
                <>
                    <img
                        src={video.thumbnail}
                        alt={`${video.topic} thumbnail`}
                        className="gallery-video-thumbnail"
                    />
                    <img
                        src="https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/_Carousel%20arrow.png?csf=1&web=1&e=ZNUzWA"
                        alt="Play Button"
                        className="gallery-gallery--button"
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

const Gallery: React.FC = () => {
    const [blurredVideos, setBlurredVideos] = React.useState<boolean[]>([true, true, true, true]);
    const [isButtonVisible, setIsButtonVisible] = React.useState<boolean>(false);
    const videoGridRef = React.useRef<HTMLDivElement>(null);

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

    React.useEffect(() => {
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
        <div ref={videoGridRef} className="gallery">
            <div className="gallery-header-container">
                <h1 className="gallery-header-title">Videos</h1>
                <div className="gallery-header-line"></div>
            </div>
            <div className="gallery-container">
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
                    <img src="https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/fast-up-circle.png?csf=1&web=1&e=ZtYjtQ" alt="Up Button" />
                </button>
            )}
        </div>
    );
};

export default Gallery;
