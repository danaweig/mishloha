import React, {useState} from 'react';
import './CartItem.scss';

import DishPopup from '../DishPopup/DishPopup.js';

const CartItemQuantity = (props) => {
  const [quantity, setQuantity] = useState(quantity=props.itemQuantity);

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