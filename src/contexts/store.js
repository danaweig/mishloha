import React, { useState, createContext, useEffect } from "react";

export const menuContext = createContext();

const MenuContextProvider = (props) => {
  const menuTitles = [
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
      image: "images/dish1.jpg",
      tag: [1, 3],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,
      likeCount: 32,
    },
    {
      id: 1592,
      title: "לארב פלא",
      desc: "סלט תאילנדי חריף עם נתחי דג פריכים. חריף.",
      price: 45,
      image: "dish2.jpg",
      tag: [],
      liked: false,
      cartQuantity: 3,
      itemCategory: 2,
      likeCount: 12,
    },
    {
      id: 1593,
      title: "פאוור פרש",
      desc: "גזר ,כרוב לבן ואדום, נבטים, ג'ינג'ר, בצל ירוק, עלי כוסברה, נענע,  שומשום, ברוטב תאילנדי מסורתי.  ",
      price: 34,
      image: "images/dish2.jpg",
      tag: [3],
      liked: false,
      cartQuantity: 4,
      itemCategory: 3,
      likeCount: 0,

    },
    {
      id: 1594,
      title: "קריספי צ'יקן",
      desc: "עוף בציפוי טמפורה ופצפוצי אורז, עם רוטב בברבקיו קוריאני.",
      price: 36,
      image: "images/dish1.jpg",
      tag: [1],
      liked: false,
      cartQuantity: 0,
      itemCategory: 4,
      likeCount: 5,

    },
    {
      id: 1595,
      title: "חמוצים יפניים",
      desc: "כרוב לבן, גזר, מלפפון ופלפלים בתחמיץ מתקתק. עם שומשום מעל. ",
      price: 24,
      image: "images/dish2.jpg",
      tag: [2],
      liked: false,
      cartQuantity: 0,
      itemCategory: 5,
      likeCount: 2,

    }
  ]);


  const [cartItems, setCartItems] = useState(menuItems.filter(item => item.cartQuantity > 0));



  const updateCartQuantity = (id, quantity) => {
    const indexCart = cartItems.findIndex(item => item.id === id);
    let newCart = [...cartItems];

    if (indexCart === -1) {
      const indexMenu = menuItems.findIndex(item => item.id === id);
      newCart.push(menuItems[indexMenu]);
      newCart[newCart.length - 1].cartQuantity += quantity;
      setCartItems(newCart);
    } else {
      newCart[indexCart].cartQuantity + quantity < 1 ? newCart.splice(indexCart, 1) : newCart[indexCart].cartQuantity += quantity;
      setCartItems(newCart);
    }
  }
  const increaseCartQuantity = (id) => {
    updateCartQuantity(id, 1);
  }
  const decreseCartQuantity = (id) => {
    updateCartQuantity(id, -1);
  }
  const [popup, setPopup] = useState({
    id: -1,
    is_opened: false,
  });

  const openPopup = (id) => {
    setPopup({
      id,
      is_opened: true,
    });
  }
  const closePopup = () => {
    setPopup({
      id: -1,
      is_opened: false
    });
  }

  return (
    <menuContext.Provider value={
      {
        menuTitles,
        menuItems,
        cartItems,
        increaseCartQuantity,
        decreseCartQuantity,
        updateCartQuantity,
        popup,
        closePopup,
        openPopup
      }
    }>
      {props.children}
    </menuContext.Provider>
  )
}

export default MenuContextProvider;