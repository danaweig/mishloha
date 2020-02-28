import React, { useState, useContext } from 'react';
import './CartItem.scss';

import { menuContext } from '../../contexts/store.js';

import closeIcon from '../../assets/images/darkCloseIcon.svg';

import DishPopup from '../DishPopup/DishPopup.js';
import CartItemQuantity from './CartItemQuantity.js';

const CartItem = (props) => {
  const { increaseCartQuantity, decreseCartQuantity, openPopup, removeFromCart } = useContext(menuContext);

  const addComments = () => {
    return (
      <p className="cart-item-comments"><b>הערות למנה: </b>{props.comment}</p>
    )
  }

  const addDishOwner = () => {
    return (
      <p className="cart-item-comments"><b>שם על המנה: </b>{props.owner}</p>
    )
  }
  return (
    <div className="cartItem" >
      <div className="cartItemRight">
        <button className="removeFromCartBtn" onClick={() => (removeFromCart(props.id, props.itemQuantity))}><img src={closeIcon} alt="close" /></button>
        <img className="cartItemIMG" src={props.image} />
      </div>
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4>{props.title}</h4>
          <span>₪{props.price}</span>
        </div>
        <p className="cartItemDescription">{props.desc}</p>
        <span>{props.item.comments !== "" ? (addComments()) : null}</span>
        <span> {props.item.dishOwner !== "" ? (addDishOwner()) : null}</span>
        <div className="cartItemQuantityContainer">
          <button className="cartItemQuantityBtn" onClick={() => openPopup(props.id)}>🖊️</button>
          <CartItemQuantity increase={() => increaseCartQuantity(props.id, props.item)}
            decrease={() => decreseCartQuantity(props.id, props.item)}
            itemQuantity={props.itemQuantity} />
        </div>
      </div>
    </div>
  )
}

export default CartItem;