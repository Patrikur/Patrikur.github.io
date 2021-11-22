import React, { useState } from 'react';

const Settings = () => {
    const [isActive, setActive] = useState(false);
    const [isSearch, setSearch] = useState(false);

    const rotate = () => {
        setActive(!isActive);
    }

    const toggle = () => {
        setSearch(!isSearch);
    }

    return (
        <div className="settings">
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Title, Actor, Genre"
                    className={isSearch ? 'searchbar-input active' : 'searchbar-input' }
                />
                <i className="fas fa-search" onClick={toggle}></i>
            </div>
            <i className="fas fa-bell"></i>
            <div className="user" onMouseOver={rotate} onMouseOut={rotate}>
                <div className="username"><span id="username">P</span></div>
                <i className={isActive ? 'fas fa-caret-down rotate' : 'fas fa-caret-down'}></i>
            </div>
        </div>
    )
};

export default Settings;