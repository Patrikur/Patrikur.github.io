import React from 'react';

const ItemCardBottom = () => {
    return (
        <div className="item-card-bottom">
            <div className="item-card-bottom-btn">
            <div className="btn-left">
              <button className="btn-play-card"><i className="fas fa-play"></i></button>
              <button className="btn-add"><i className="fas fa-plus"></i></button>
              <button className="btn-like"><i className="far fa-thumbs-up"></i></button>
              <button className="btn-dislike">
                <i className="far fa-thumbs-down"></i>
              </button>
            </div>
            <div className="btn-right">
              <button className="btn-open">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <div className="item-card-bottom-info">
            <div className="media-info">
              <span className="match">New</span><span className="age">16+</span
              ><span className="length">3 Seasons</span
              ><span className="resolution">HD</span>
            </div>
            <div className="categories">
              <span className="category">Animation</span>
              <div className="category dot"></div>
              <span className="category">Drama </span>
            </div>
          </div>
        </div>
    )
};

export default ItemCardBottom;