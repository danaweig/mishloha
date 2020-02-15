import React, { useContext, useState, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./Dish.scss";
import { menuContext } from "contexts/store";
import '../Cart/CartItem.scss';
import DishPopup from "components/DishPopup/DishPopup";
const Dish = () => {
  const matches = useMediaQuery('(min-width:1000px)');

  const { menuItems , increaseCartQuantity, heart} = useContext(menuContext);
 
 return (
 
 <div>

    {menuItems.map(menuItems => {
      if(matches){
      return (
        
          <div key={menuItems.id} className="GBox" >
      <div className="DescCard" >
        
      <img  className="" src={menuItems.image} />
   
        <svg onClick={()=>increaseCartQuantity(menuItems.id)} 
        className="like" xmlns="http://www.w3.org/2000/svg" width="19.801" height="18.049" viewBox="0 0 19.801 18.049"><path id="heart-01" d="M9.913 18.05a.727.727 0 0 1-.442-.184c-.155-.183-.52-.575-1.092-1.123l-1.95-1.985C5.7 14 4.917 13.242 4.11 12.428l-2.184-2.216A6.716 6.716 0 0 1 .5 8.07 5.9 5.9 0 0 1 0 5.692a6.162 6.162 0 0 1 .416-2.35 6.377 6.377 0 0 1 1.328-2.013A4.34 4.34 0 0 1 3.93.13a5.933 5.933 0 0 1 2.445 0 7.034 7.034 0 0 1 2.29.966A7.554 7.554 0 0 1 9.938 2.22a7.028 7.028 0 0 1 1.378-1.072 7.347 7.347 0 0 1 2.237-.994A5.57 5.57 0 0 1 15.87.13a4.366 4.366 0 0 1 2.16 1.2 6.272 6.272 0 0 1 1.326 2.01 5.638 5.638 0 0 1 .444 2.352 6.44 6.44 0 0 1-1.95 4.52l-2.134 2.142-2.29 2.325-1.952 1.985-1.145 1.123a.52.52 0 0 1-.417.26z"/></svg>      <div className="Desc">
     
        <div className="cartItemHeader">
          <h4>{menuItems.title}</h4>
          <span>{menuItems.price}₪</span>
        </div>
        <p className="cartItemDescription">{menuItems.desc}</p>
      <div className="DescCard">
          <div className="dish-tag-image">img---</div>
          <span className="dish-tag-desc">{menuItems.title}</span>
        </div>
        <div className="button">
          <button onClick={()=>increaseCartQuantity(menuItems.id)}>הוסף להזמנה +</button>
        </div>
      </div>
    </div>
    </div>
      )
   } })}
  </div>
 );
}


export default Dish;
