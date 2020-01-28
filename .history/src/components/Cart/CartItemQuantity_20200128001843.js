import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItemQuantity = () => {

  return (
    <div className="cartItemQuantity">
      <button onClick={<DishPopup />}>🖊️</button>
      <button onClick={props.increase}>+</button>
      <span>{props.itemQuantity}</span>
      <button onClick={props.decrease}>-</button>
    </div>
  )
}

export default CartItemQuantity;