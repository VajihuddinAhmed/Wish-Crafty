import React, { useContext } from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../provider/cart/cart.provider';

const CartDropdown = ({ history }) => {
    const { cartItems, toggleHidden } = useContext(CartContext)

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            { 
                cartItems.length 
                ? (cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)) 
                : <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={() => 
                {history.push('/checkout')
                toggleHidden()}}>
                Checkout
            </CustomButton>
        </div>
    )
};

export default withRouter(CartDropdown);