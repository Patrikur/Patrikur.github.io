import React from 'react';

const Settings = () => {
    return (
        <div className="settings">
            <div className="searchbar">
            <input
                type="text"
                placeholder="Title, Actor, Genre"
                className="searchbar-input searchbar-active"
            />
            <i className="fas fa-search"></i>
            </div>
            <i className="fas fa-bell"></i>
            <div className="user">
            <div className="username"><span id="username">P</span></div>
            <i className="fas fa-caret-down"></i>
            <i className="fas fa-caret-up"></i>
            </div>
        </div>
    )
};

export default Settings;