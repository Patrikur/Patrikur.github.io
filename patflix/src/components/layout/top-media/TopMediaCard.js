import React from 'react';

const TopMediaCard = () => {
    return (
        <div className="top-media-card">
          <h1 className="title" id="title">
            <img
              src="https://www.themoviedb.org/t/p/original/yVd6PBGL5zCFCN8NhnxAP0i1Zjw.svg"
              alt="Title Logo"
            />
          </h1>
          <p className="description" id="description">
            Drawn from interviews with survivors of Easy Company, as well as
            their journals and letters, Band of Brothers chronicles the
            experiences of these men from paratrooper training in Georgia
            through the end of the war.
          </p>
          <div className="top-card-buttons">
            <button className="btn-play"><i className="fas fa-play"></i> Play</button>
            <button className="btn-info">
              <i className="fas fa-info-circle"></i> More Info
            </button>
          </div>
        </div>
    )
};

export default TopMediaCard;