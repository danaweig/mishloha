import React, { useContext, useState, useEffect } from "react";
import "./Dish.scss";
import { menuContext } from "contexts/store";
import '../Cart/CartItem.scss';
import DishPopup from "components/DishPopup/DishPopup";
const Dish = () => {
  const { menuItems , increaseCartQuantity} = useContext(menuContext);
 
 return (<div>

    {menuItems.map(menuItems => {
      return (
        
          <div key={menuItems.id} className="GBox" >
      <div className="DescCard" >
      <img  className="cartItemIMG" src={menuItems.image} />
      <div className="Desc">
        <div className="cartItemHeader">
          <h4>{menuItems.title}</h4>
          <span>{menuItems.price}₪</span>
        </div>
        <p className="cartItemDescription">{menuItems.desc}</p>
        
        <div className="button">
          <button onClick={()=>increaseCartQuantity(menuItems.id)}>הוסף להזמנה +</button>
        </div>
      </div>
    </div>
    </div>
      )
    })}
  </div>
  );
}


export default Dish;
