import React from 'react';

const Notification = () => {
    return (
        <div className="notification">
          <div className="notification-picture">
            <div className="notification-item" id="akira">
              <img
                src="https://www.themoviedb.org/t/p/original/TH5zE4t6WudGzUfSNqhBAsFpsm.svg"
                alt="Akira Logo"
                className="notification-item-logo"
              />
            </div>
          </div>
          <div className="notification-info">
            <p className="action">New Arrival</p>
            <p className="notification-title">Akira</p>
            <p className="notification-date">1 week ago</p>
          </div>
        </div>
    )
}

export default Notification;