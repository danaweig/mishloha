import React, {useState, useContext} from 'react';
import './CartItem.scss';

import {menuContext} from '../../contexts/store.js';
import DishPopup from '../DishPopup/DishPopup.js';

const CartItemQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const {menuItems} = useContext(menuContext);

  return (
    <div className="cartItemQuantity">
      <button onClick={<DishPopup />}>🖊️</button>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </div>
  )
}

export default CartItemQuantity;