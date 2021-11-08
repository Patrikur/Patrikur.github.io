import React from 'react';

const UserSettings = () => {
    return (
        <ul className="user-settings">
          <li className="settings-link">
            <a className="settings-link" href="#">Account</a>
          </li>
          <li className="settings-link">
            <a className="settings-link" href="#">Help Center</a>
          </li>
          <li className="settings-link">
            <a className="settings-link" href="#">Sign out of Patflix</a>
          </li>
        </ul>
    )
};

export default UserSettings;