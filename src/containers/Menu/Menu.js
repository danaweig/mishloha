import React, { Component } from 'react';
import DishPopup from '../../components/DishPopup/DishPopup.js';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.js'
import Cart from '../../components/Cart/Cart.js';
import MenuContextProvider from '../../contexts/store.js';
import Hero from '../../components/Hero/Hero.js'
import OrderType from 'components/OrderType/OrderType.js';
import OrderSummary from 'components/OrderSummary/OrderSummary.js';
import Dishes from 'components/Dishes/Dishes.js';
import './Menu.scss';
class Menu extends Component {
    render() {
        return (
            <div className="Menu">


                <MenuContextProvider>
                    <DishPopup />
                    <Hero />
                    <div className="MenuSection">
                        <div className="container">

                            <div className="flexRow">
                                <div className="rightPane">
                                    <CategoryMenu />
                                </div>
                                <div className="MenuDishes">
                                    <Dishes />
                                </div>
                                <div className="leftPane">
                                    <OrderType />
                                    <Cart />
                                    <OrderSummary />
                                </div>
                            </div>
                        </div>
                    </div>
                </MenuContextProvider>
            </div>

        );
    }
}

export default Menu;