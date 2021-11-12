import React from 'react';

const BigItemCardMore = () => {
    return (
        <div className="big-item-card-more">
           <h2 className="recommendations-title">More Like This</h2>
           <div className="big-item-card-recommendations">
            <div className="big-item-card-recommendations-top">
              <div className="recommendations-item" id="akira">
                <img
                  src="https://www.themoviedb.org/t/p/original/TH5zE4t6WudGzUfSNqhBAsFpsm.svg"
                  alt="Akira Logo"
                  className="item-logo"
                />
              </div>
            </div>
            <div className="big-item-card-recommendations-menu">
              <div className="recommendations-info">
                <span className="age">16+</span><span className="year">1988</span>
              </div>
              <button className="btn-add"><i className="fas fa-plus"></i></button>
            </div>
            <div className="big-item-card-recommendations-description">
              A secret military project endangers Neo-Tokyo when it turns a
              biker gang member into a rampaging psychic psychopath that only
              two teenagers and a group of psychics can stop.
            </div>
          </div>
        </div>
    )
};

export default BigItemCardMore;