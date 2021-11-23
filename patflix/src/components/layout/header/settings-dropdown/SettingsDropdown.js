import React from 'react';
import Profiles from './Profiles';
import UserSettings from './UserSettings';

const SettingsDropdown = () => {
    return (
        <div className="settings-dropdown">
            <Profiles />
            <UserSettings />
        </div>
    )
}

export default SettingsDropdown;