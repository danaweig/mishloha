import React, { useState, createContext, useEffect } from "react";

export const menuContext = createContext();

const MenuContextProvider = (props) => {

  const useLocalStroage = (key, initialValue) => {

    const [localStorageState, setLocalStorageState] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? item : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const changeState = (newValue) => {
      localStorage.setItem(key, newValue);
    }

    useEffect(() => {
      changeState(localStorageState);
    }, [localStorageState]);

    return [localStorageState, setLocalStorageState];
  }

  const [menuTitles, setmenuTitles] = useState([]);
  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(categories => { setmenuTitles(categories); });
  }, []);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch('/api/menuItems')
      .then(res => res.json())
      .then(menuItems => { setMenuItems(menuItems); });
  }, []);

  const [restaurantDetails, setRestaurantDetails] = useState([]);
  useEffect(() => {
    const restaurants = [];
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(restaurants => { setRestaurantDetails(restaurants[0]); });
    ;
  }, []);
  /*
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
    title: "אורז ועיקריות",
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
*/

  /*const restaurantDetails = {
    name: 'גו נודלס תל אביב שדרות יהודית',
    description: `גו נודלס ת"א מתמחה בנודלס איכותי במתכונת בריאה. בתור מנות פתיחה תוכלו ליהנות ממבחר אגרולים, מרקים וסלטים סיניים רעננים. כמנה עיקרית תוכלו לבחור משלל סוגי הנודלס ברטבים שונים כולל נודלס מאטריות ביצים, נודלס מחיטה מלאה, אטריות אורז, אטריות שעועית או ממגוון מנות בשריות בתוספת אורז כמו למשל מנת הצ'ופסוי המוכרת, עוף בלימון ועוד. לסיום אפשר לקנח במנת בננה לוטי מתקתקה מעולה של גו נודלס או אולי קרם קוקוס מיוחד.nבנוסף מציעה מסעדת גו נודלס ת"א גם מבחר ארוחות עסקיות במחירים נוחים מאד כמו גם שירות משלוחים בעלות של 7 ₪ לתל אביב, רמת גן וגבעתיים.nלחובבי הנודלס ולכל מי שמחפש אוכל טעים, בריא ומהיר עם ניחוחות סיניים, גו נודלס ת"א הוא המקום להזמין ממנו.`,
    address: `שדרות יהודית, תל אביב`,
    phone: '03-3002532',
    deliveryTime: '40-60',
    deliveryPrice: '12',
    deliveryMinimum: '60',
    takeawayTime: '30',
    logo: 'images/restLogo.png',
    heroImage: 'images/restBg.jpg'
  };*/
  /*
  const [menuItems, setMenuItems] = useState([
    {
      id: 1591,
      title: "דאבל פרש רול",
      desc: "2 יחידות. אטריות שעועית, טופו, בטטה קריספי, כוסברה, עירית, אבוקדו, גזר ונבטים, מוגש עם רוטב ויאטנמי חריף.",
      price: 32,
      image: "images/dish1.jpg",
      tag: [3, 4],
      liked: false,
      cartQuantity: 0,
      itemCategory: 1,
      likeCount: 32,
      comments: "",
      dishOwner: "",
    },
    {
      id: 1592,
      title: "לארב פלא",
      desc: "סלט תאילנדי חריף עם נתחי דג פריכים. חריף.",
      price: 45,
      image: "images/dish2.jpg",
      tag: [3, 4],
      liked: false,
      cartQuantity: 0,
      itemCategory: 2,
      likeCount: 12,
      comments: "",
      dishOwner: "",
    },
    {
      id: 1593,
      title: "פאוור פרש",
      desc: "גזר ,כרוב לבן ואדום, נבטים, ג'ינג'ר, בצל ירוק, עלי כוסברה, נענע,  שומשום, ברוטב תאילנדי מסורתי.  ",
      price: 34,
      image: "images/dish2.jpg",
      tag: [3],
      liked: false,
      cartQuantity: 0,
      itemCategory: 3,
      likeCount: 0,
      comments: "",
      dishOwner: "",
    },
    {
      id: 1594,
      title: "קריספי צ'יקן",
      desc: "עוף בציפוי טמפורה ופצפוצי אורז, עם רוטב בברבקיו קוריאני.",
      price: 36,
      image: "images/dish1.jpg",
      tag: [1, 2, 3],
      liked: false,
      cartQuantity: 0,
      itemCategory: 4,
      likeCount: 5,
      comments: "",
      dishOwner: "",
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
      comments: "",
      dishOwner: "",

    }
  ]);
  */
  const [cartItemsStorage, updateCartItemsStorage] = useLocalStroage('cartItems', []);
  const [timeOutStorage, updateTimeOutStorage] = useLocalStroage('timeOut', new Date().getTime());


  const [cartItems, setCartItems] = useState(() => {

    let isDayPassed = new Date().getTime() > localStorage.getItem('timeOut');
    if (isDayPassed) {
      return [];
    } else {
      return cartItemsStorage ? JSON.parse(cartItemsStorage) : [];
    }

  });
  useEffect(() => {
    updateCartItemsStorage(JSON.stringify(cartItems));
    updateTimeOutStorage(new Date().getTime() + (24 * 60 * 60 * 1000));

  }, [cartItems]);
  const [isDelivery, updateDelivery] = useState(true);

  const updateCartQuantity = (id, dish, change) => {
    const indexCart = cartItems.findIndex(item => item._id === id);
    let newCart = [...cartItems];

    //if item dosn't exist in cart - add to cart
    if (indexCart === -1) {
      const indexMenu = menuItems.findIndex(item => item._id === id);
      newCart.push(menuItems[indexMenu]);
      newCart[newCart.length - 1].cartQuantity = dish.cartQuantity;
      newCart[newCart.length - 1].comments = dish.comments;
      newCart[newCart.length - 1].dishOwner = dish.dishOwner;
      setCartItems(newCart);
    } else {
      //if items cart quantity is less than 1 remove from cart
      if (newCart[indexCart].cartQuantity + change < 1) {
        newCart[indexCart].cartQuantity = 0;
        newCart.splice(indexCart, 1);
        //update existing cart item
      } else {
        newCart[indexCart].cartQuantity += change;
        [newCart[indexCart].comments, newCart[indexCart].dishOwner] = [dish.comments, dish.dishOwner];
        setCartItems(newCart);
      }
    }
    setCartItems(newCart);

  }
  //handles the increase and decrease buttons in the cart
  const increaseCartQuantity = (id, item) => {
    updateCartQuantity(id, item, 1);
  }
  const decreseCartQuantity = (id, item) => {
    updateCartQuantity(id, item, -1);
  }
  //----//
  const removeFromCart = (id, quantity) => {
    updateCartQuantity(id, undefined, -quantity);
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
        openPopup,
        isDelivery,
        updateDelivery,
        restaurantDetails,
        removeFromCart,
        useLocalStroage,
        updateCartItemsStorage,
        updateTimeOutStorage
      }
    }>
      {props.children}
    </menuContext.Provider>
  )
}

export default MenuContextProvider;