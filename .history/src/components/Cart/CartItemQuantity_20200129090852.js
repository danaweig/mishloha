import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItemQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cartItemQuantity">
      <button onClick={<DishPopup state={changeState(true)} />}>🖊️</button>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </div>
  )
}

export default CartItemQuantity;