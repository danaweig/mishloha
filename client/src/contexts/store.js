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
  useEffect(async () => {
    await fetch('/api/categories')
      .then(res => res.json())
      .then(categories => { setmenuTitles(categories); });
  }, []);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(async () => {
    await fetch('/api/menuItems')
      .then(res => res.json())
      .then(menuItems => { setMenuItems(menuItems); });
  }, []);

  const [restaurantDetails, setRestaurantDetails] = useState([]);
  useEffect(async () => {
    const restaurants = [];
    await fetch('/api/restaurants')
      .then(res => res.json())
      .then(restaurants => { setRestaurantDetails(restaurants[0]); });
    ;
  }, []);

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
        newCart[indexCart].comments = '';
        newCart[indexCart].dishOwner = '';
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
  const likeNum = (props) => {
    const index = menuItems.findIndex(i => i._id === props.id);
    let likeStatus = [...menuItems];
    const doYouLike = likeStatus[index].liked;
    likeStatus[index].liked = !likeStatus[index].liked;

    if (doYouLike) {
      likeStatus[index].likeCount--;
      setMenuItems(likeStatus);
    } else {
      likeStatus[index].likeCount++;
      setMenuItems(likeStatus);
    }
  };
  return (
    <menuContext.Provider value={
      {
        likeNum,
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