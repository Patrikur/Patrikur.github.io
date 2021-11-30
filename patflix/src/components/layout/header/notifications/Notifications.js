import React from 'react';
import Notification from './Notification';

const Notifications = () => {
    return (
        <div className="notifications">
            <div className="notifications-top"><i className='fas fa-caret-up'></i></div>
            <div className="notifications-bottom">
                <Notification />
                <Notification />
                <Notification />
            </div> 
        </div>   
    )
}

export default Notifications;