import React, { useState, useContext } from 'react';
import './CartItem.scss';

import { menuContext } from '../../contexts/store.js';

import DishPopup from '../DishPopup/DishPopup.js';
import CartItemQuantity from './CartItemQuantity.js';

const CartItem = (props) => {
  const { cartItems, increaseCartQuantity, decreseCartQuantity, openPopup } = useContext(menuContext);

  const addComments = () => {
    return (
      <p><b>הערות למנה: </b>{props.comment}</p>
    )
  }

  const addDishOwner = () => {
    return (
      <p><b>שם על המנה: </b>{props.owner}</p>
    )
  }

  return (
    <div className="cartItem" >
      <img className="cartItemIMG" src={props.image} />
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4>{props.title}</h4>
          <span>₪{props.price}</span>
        </div>
        <p className="cartItemDescription">{props.desc}</p>
        <div className="cartItemQuantity">
          <button onClick={() => openPopup(props.id)}>🖊️</button>
          <CartItemQuantity increase={() => increaseCartQuantity(props.id)}
            decrease={() => decreseCartQuantity(props.id)}
            itemQuantity={props.itemQuantity} />
        </div>
          <span>{props.comment === true ? (addComments()) : null}</span>
          <span> {props.owner === true ? (addDishOwner()) : null}</span>
        </div>
      </div>
      )
    }
    
export default CartItem;