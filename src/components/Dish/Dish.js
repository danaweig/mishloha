import React, { useContext, useState, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./Dish.scss";
import { menuContext } from "contexts/store";
import '../Cart/CartItem.scss';
import DishPopup from "components/DishPopup/DishPopup";
import DishTag from "components/DishTag/DishTag";
import Like from "components/Like/Like";
const Dish = (props) => {
  const matches = useMediaQuery('(min-width:1000px)');

  const { menuItems, increaseCartQuantity, openPopup, heart } = useContext(menuContext);

  return (

    <div className="Dish">
      <div key={props.id} className="GBox" >
        <div className="DescCard" >
          <div className="ImageCard">
            <img className="" src={props.image} />
            <div className="likeCont">
              <Like liked={props.liked} id={props.id} />
            </div>
          </div>
          <div className="Desc">

            <div className="cartItemHeader">
              <h4>{props.title}</h4>
              <span>₪{props.price}</span>
            </div>
            <p className="cartItemDescription">{props.desc}</p>
            <DishTag tag={props.tag} />
            <div className="button">
              <button onClick={() => openPopup(props.id)}>הוסף להזמנה +</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default Dish;
