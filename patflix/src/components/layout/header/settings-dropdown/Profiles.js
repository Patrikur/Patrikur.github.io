import React from 'react';

const Profiles = () => {
    return (
        <div className="profiles">
            <ul>
                <li>
                <div className="profile">
                    <div className="username"><span>K</span></div>
                    <a href="http://netflix.com" className="username-full">Kids</a>
                </div>
                </li>
                <li>
                <div className="profile">
                    <div className="username"><span>G</span></div>
                    <a href="http://netflix.com" className="username-full">Guest</a>
                </div>
                </li>
            </ul>
            <div className="manage-settings"><a href="http://netflix.com">Manage Settings</a></div>
        </div>
    )
};

export default Profiles;