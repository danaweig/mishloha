import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItemQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const openDishPopup = () => {
    return <DishPopup className="opened DishPopup" />
  }

  return (
    <div className="cartItemQuantity">
      <button onClick={openDishPopup()}>🖊️</button>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
    </div>
  )
}

export default CartItemQuantity;