import React, { useState, createContext } from "react";

export const menuContext = createContext();

const MenuContextProvider = (props) => {
  let menuTitles = [
    {
      id: 1,
      title: "סטריט פוד",
      desc: "לורם איפסום"
    },
    {
      id: 2,
      title: "אטריות מיוחדות",
      desc: "לורם איפסום"
    },
    {
      id: 3,
      title: "אטריות אורז",
      desc: "לורם איפסום"
    },
    {
      id: 4,
      title: "אורז ועיקיות",
      desc: "לורם איפסום"
    },
    {
      id: 5,
      title: "קומבינציות",
      desc: "לורם איפסום"
    },
    {
      id: 6,
      title: "אטריות ביצים",
      desc: "לורם איפסום"
    },
    {
      id: 7,
      title: "מרקים",
      desc: "לורם איפסום"
    },
    {
      id: 8,
      title: "גו נודלס טבעוני",
      desc: "לורם איפסום"
    },
    {
      id: 9,
      title: "גו נודלס ללא גלוטן",
      desc: "לורם איפסום"
    },
    {
      id: 10,
      title: "קינוחים",
      desc: "לורם איפסום",
    },
    {
      id: 11,
      title: "שתיה קלה",
      desc: "לורם איפסום",
    },
    {
      id: 12,
      title: "בירות",
      desc: "לורם איפסום",
    },
  ];

  const [menuItems, setMenuItems] = useState([
    {
      id: 1591,
      title: "דאבל פרש רול",
      desc: "2 יחידות. אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
      price: 32,
      tag: ["popular", "veg"],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,
    },
    {
      id: 1592,
      title: "לארב פלא",
      desc: "סלט תאילנדי חריף עם נתחי דג פריכים. חריף.",
      price: 45,
      tag: [],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,
    },
    {
      id: 1593,
      title: "פאוור פרש",
      desc: "גזר ,כרוב לבן ואדום, נבטים, ג'ינג'ר, בצל ירוק, עלי כוסברה, נענע,  שומשום, ברוטב תאילנדי מסורתי.  ",
      price: 34,
      tag: ["veg"],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,

    },
    {
      id: 1594,
      title: "קריספי צ'יקן",
      desc: "עוף בציפוי טמפורה ופצפוצי אורז, עם רוטב בברבקיו קוריאני.",
      price: 36,
      tag: ["popular"],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,

    },
    {
      id: 1595,
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
    <MenuContext.provider value={{menuTitles, menuItems}}>
      {props.children}
    </MenuContext.provider>
  )
}

export default MenuContextProvider