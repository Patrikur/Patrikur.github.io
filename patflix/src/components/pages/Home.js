import React from 'react';
import TopMedia from '../layout/top-media/TopMedia';
import VideoCarousel from '../layout/video-carousel/VideoCarousel';
import Footer from '../layout/footer/Footer'

const Home = () => {
    return (
        <div className="main">
            <TopMedia />
            <div className="media-body">
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />  
            </div>
            <Footer />
        </div>
    )
};

export default Home;