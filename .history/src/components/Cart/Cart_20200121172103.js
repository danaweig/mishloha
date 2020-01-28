import React from 'react';
import CartItem from '../Cart/CartItem.js';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cartContainer">
      <div className="cartContainerHeader">
        <h4>פירוט ההזמנה</h4>
      </div>
      <CartItem />
    </div>

  )
}

export default Cart;