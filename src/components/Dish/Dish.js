import React, { Component } from "react";
import Img from "./Img.js";
// import Desc from "./Desc.js";

import "./Dish.scss";

class Dish extends Component {
  render() {
    return (
      <div className="GBox">
        <Img />
        <div className="Desc">
          {/* <Desc /> */}
          <form className="order">
            <div className="order Dishtitle">57 ש"ח</div>
            <button className="button">
              <a href="#">הוסף להזמנה+</a>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Dish;
