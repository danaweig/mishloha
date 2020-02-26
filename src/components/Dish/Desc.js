import React from "react";
import Title from "./Title.js";
import Img from "./Img.js";
import store from "../assets/store.js"

const Desc = (props) => {
  const
  return (
    <div className="GBox" DishId={store.id}>
      <img className="DishImg" src={Img} />
      <div className="Desc">
        <div className="TitleANDpric">
          <h4>{store.title}</h4>
          <div>{store.price}₪</div>
        </div>
      </div>
    </div>
  )
}


export default Desc;
