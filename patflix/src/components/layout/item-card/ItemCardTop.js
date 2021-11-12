import React from 'react';

const ItemCardTop = () => {
    return (
        <div className="item-card-top">
            <video className="card-video" autoplay muted loop>
            <source src="/videos/akira.mp4" type="video/mp4" id="akira-video" />
          </video>
          <div className="item-card-top-menu">
            <img
              src="https://www.themoviedb.org/t/p/original/TH5zE4t6WudGzUfSNqhBAsFpsm.svg"
              alt="Akira Logo"
              className="item-logo"
            />
            <div className="item-card-top-btn">
              <button className="btn-mute">
                <i className="fas fa-volume-mute"></i>
              </button>
              <button className="btn-unmute">
                <i className="fas fa-volume-up"></i>
              </button>
            </div>
          </div>
        </div>
    )
};

export default ItemCardTop;