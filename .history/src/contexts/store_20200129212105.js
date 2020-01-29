import React, { useState, useContext } from "react";

export const menuContext = createContext() ;

const menuContextProvider = (props) => {

  const [menuItems, setMenuItems] = useState([
    {1591:{
      id:"1591",
      title: "דאבל פרש רול",
      desc: "2 יחידות. אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
      price: "32",
      tag: ["popolar", "veg"],
      liked: false,
      cartQuantity: 0,
  },
  1592:{
      "id":"1592",
      "titel": "לארב פלא",
      "desc": "סלט תאילנדי חריף עם נתחי דג פריכים. חריף.  ",
      "price": "45",
      "tag": [],
      "liked": true ? true : false

  },
  "1593":{
      "id":"1593",
      "titel": "פאוור פרש",
      "desc": "גזר ,כרוב לבן ואדום, נבטים, ג'ינג'ר, בצל ירוק, עלי כוסברה, נענע,  שומשום, ברוטב תאילנדי מסורתי.  ",
      "price": "34",
      "tag": ["veg"],
      "liked": true ? true : false

  },
  "1594":{
      "id":"1594",
      "titel": "קריספי צ'יקן",
      "desc": "עוף בציפוי טמפורה ופצפוצי אורז, עם רוטב בברבקיו קוריאני.",
      "price": "36",
      "tag": ["popolar"],
      "liked": true ? true : false

  },
"1595":{
  "id":"1595",
  "titel": "חמוצים יפניים",
  "desc": "כרוב לבן, גזר, מלפפון ופלפלים בתחמיץ מתקתק. עם שומשום מעל. ",
  "price": "24",
  "tag": [],
  "liked": true ? true : false

}
  ]);

  return (
    <menuContext.provider>
      {props.children}
    </menuContext.provider>
  )
}