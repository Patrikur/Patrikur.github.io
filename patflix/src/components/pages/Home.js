import React from 'react';
import TopMedia from '../layout/top-media/TopMedia';
import VideoCarousel from '../layout/video-carousel/VideoCarousel';

const Home = () => {
    return (
        <div className="main">
            <TopMedia />
            <VideoCarousel />
            <VideoCarousel />
            <VideoCarousel />
            <VideoCarousel />
        </div>
    )
};

export default Home;