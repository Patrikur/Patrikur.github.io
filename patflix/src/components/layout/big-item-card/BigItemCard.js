import React from 'react';
import BigItemCardBottomInfo from './BigItemCardBottomInfo';
import BigItemCardMore from './BigItemCardMore';
import BigItemCardTop from './BigItemCardTop';
import BigItemCardTopInfo from './BigItemCardTopInfo';

const BigItemCard = () => {
    return (
        <div className="big-item-card">
            <BigItemCardTop />
            <BigItemCardTopInfo />
            <hr />
            <BigItemCardMore />
            <hr />
            <BigItemCardBottomInfo />
        </div>
    )
};

export default BigItemCard;