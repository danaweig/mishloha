import React from 'react';

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