import React from 'react';
import Profiles from './Profiles';
import UserSettings from './UserSettings';

const SettingsDropdown = () => {
    return (
        <div className="settings-dropdown">
            <div className="settings-dropdown-top"></div>
            <div className="settings-dropdown-bottom">
                <Profiles />
                <UserSettings />
            </div>
            
        </div>
    )
}

export default SettingsDropdown;