import React from "react";
import "./Dish.scss";

const Img = () => {
  let DishMenu = [
    <img  
      src="https://files.mishloha.co.il/files/menu_food_pic/FIL_6254560_636830557247995546.jpg"
      alt=""
    />
  ];

  return (
    <div >
      {DishMenu.map(Img => {
        return (
          <div  className="DishImg">
            {Img}
            <img
              className="over-img"
              src="https://www.mishloha.co.il/dist/img/item-prop-icons/bestsellericon.png"
              alt="פופולארי"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Img;
