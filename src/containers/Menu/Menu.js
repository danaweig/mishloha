import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DishPopup from '../../components/DishPopup/DishPopup.js';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.js'
import Cart from '../../components/Cart/Cart.js';
import MenuContextProvider from '../../contexts/store.js';
import Hero from '../../components/Hero/Hero.js'
import OrderType from 'components/OrderType/OrderType.js';
import OrderSummary from 'components/OrderSummary/OrderSummary.js';
import Dishes from 'components/Dishes/Dishes.js';
import RestaurantDescription from 'components/RestaurantDescription/RestaurantDescription.js';
import './Menu.scss';
import Dish from 'components/Dish/Dish.js';
import SummeryPage from 'components/SummeryPage/SummeryPage.js';


const Menu = () => {

    return (
        <>
            <BrowserRouter>
                <MenuContextProvider>
                    <div className="Menu">

                        <Hero />
                        <div className="MenuSection">
                            <div className="container">
                                <div className="flexRow">
                                    <div className="rightPane">
                                        {/* <CategoryMenu /> */}
                                        <Route exact path='/' component={CategoryMenu} />
                                    </div>
                                    <div className="MenuDishes">
                                        {/* <Dishes /> */}
                                        <Route exact path='/' component={Dishes} />
                                        <Route  path='/payment' component={SummeryPage} />
                                        {/* <SummeryPage /> */}
                                    </div>
                                    <div className="leftPane">
                                        {/* <OrderType />
                                    <Cart />
                                    <OrderSummary text="המשך" /> */}
                                    <Route exact path='/' component={OrderType} />
                                    <Route exact path='/' component={Cart} />
                                    <Route exact path='/' component={OrderSummary } />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <RestaurantDescription />
                </MenuContextProvider>
            </BrowserRouter>
        </>
    );
}

export default Menu;