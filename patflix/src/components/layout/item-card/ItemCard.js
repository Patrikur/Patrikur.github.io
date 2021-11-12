import React from 'react';
import ItemCardBottom from './ItemCardBottom';
import ItemCardTop from './ItemCardTop';

const ItemCard = () => {
    return (
        <div className="item-card">
            <ItemCardTop />
            <ItemCardBottom />
        </div>
    )
};

export default ItemCard;