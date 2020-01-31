import React, { Component } from 'react';
import DishPopup from '../../components/DishPopup/DishPopup.js';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.js'
import Hero from '../../components/Hero/Hero.js'
import OrderType from 'components/OrderType/OrderType.js';
import OrderSummary from 'components/OrderSummary/OrderSummary.js';
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <DishPopup />
                <Hero />
                <div className="MenuSection">
                    <div className="container">

                        <div className="flexRow">
                            <div className="rightPane">
                                <CategoryMenu />
                            </div>
                            <div className="MenuDishes">
                                <p>Menu</p>
                            </div>
                            <div className="leftPane">
                                <OrderType />
                                <OrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;