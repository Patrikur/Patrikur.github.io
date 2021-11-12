import React from 'react';

const BigItemCardTop = () => {
    return (
        <div className="item-card-top">
            <video class="big-card-video" muted loop>
            <source src="/videos/akira.mp4" type="video/mp4" id="akira-video" />
          </video>
          <div class="item-card-top-menu">
            <img
              src="https://www.themoviedb.org/t/p/original/TH5zE4t6WudGzUfSNqhBAsFpsm.svg"
              alt="Akira Logo"
              class="item-logo"
            />
            <div class="item-card-top-btn">
              <button class="btn-mute">
                <i class="fas fa-volume-mute"></i>
              </button>
              <button class="btn-unmute">
                <i class="fas fa-volume-up"></i>
              </button>
            </div>
          </div>
        </div>
    )
};

export default BigItemCardTop;