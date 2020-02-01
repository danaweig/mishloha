import React from "react";
import Title from "./Title.js";
import Img from "./Img.js";
import store from "../assets/store.js"

const Desc = (props) => {

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


// const Desc = () => {
//   let Desc = ["מוגש עם גזר, בצל, נבטים וביצה"];
//   let pop = [
//     <img
//       src="https://www.mishloha.co.il/dist/img/item-prop-icons/bestsellericon.png"
//       alt="פופולארי"
//     />,
//     "פופולארי"
//   ];

//   return (
//     <div>
//       <Title />
//       {Desc.map(Desc => {
//         return <div className="text">{Desc}</div>;
//       })}
//       <div className="text">
//         {pop[0]} {pop[1]}
//       </div>
//     </div>
//   );
// };

export default Desc;
