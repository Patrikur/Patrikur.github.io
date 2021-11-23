import React from 'react';

const UserSettings = () => {
    return (
        <ul className="user-settings">
          <li className="settings-link">
            <a className="settings-link" href="https://netflix.com">Account</a>
          </li>
          <li className="settings-link">
            <a className="settings-link" href="https://netflix.com">Help Center</a>
          </li>
          <li className="settings-link">
            <a className="settings-link" href="https://netflix.com">Sign out of Patflix</a>
          </li>
        </ul>
    )
};

export default UserSettings;