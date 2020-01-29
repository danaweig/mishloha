import React, { useState, useContext } from "react";

export const menuContext = createContext() ;

const menuContextProvider = (props) => {

  const [menuItems, setMenuItems] = useState([
    { id:1591,
      title: "דאבל פרש רול",
      desc: "2 יחידות. אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
      price: 32,
      tag: ["popular", "veg"],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,
  },
  {   id:1592,
      title: "לארב פלא",
      desc: "סלט תאילנדי חריף עם נתחי דג פריכים. חריף.  ",
      price: 45,
      tag: [],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,
  },
  {   id:1593,
      title: "פאוור פרש",
      desc: "גזר ,כרוב לבן ואדום, נבטים, ג'ינג'ר, בצל ירוק, עלי כוסברה, נענע,  שומשום, ברוטב תאילנדי מסורתי.  ",
      price: 34,
      tag: ["veg"],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,

  },
  {   id:1594,
      title: "קריספי צ'יקן",
      desc: "עוף בציפוי טמפורה ופצפוצי אורז, עם רוטב בברבקיו קוריאני.",
      price: 36,
      tag: ["popular"],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,

  },
    { id:1595,
      title: "חמוצים יפניים",
      desc: "כרוב לבן, גזר, מלפפון ופלפלים בתחמיץ מתקתק. עם שומשום מעל. ",
      price: 24,
      tag: [],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,

}
  ]);

  return (
    <menuContext.provider>
      {props.children}
    </menuContext.provider>
  )
}