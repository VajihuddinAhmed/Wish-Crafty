import React, { useContext } from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom-button';
import { CartContext } from '../../provider/cart/cart.provider';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const { addItem } = useContext(CartContext)
    
    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">€{ price }</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
        </div>
    )
};

export default CollectionItem;