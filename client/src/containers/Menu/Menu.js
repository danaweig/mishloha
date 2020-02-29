import React, { useContext } from 'react';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.js'
import Cart from '../../components/Cart/Cart.js';
import OrderType from 'components/OrderType/OrderType.js';
import OrderSummary from 'components/OrderSummary/OrderSummary.js';
import Dishes from 'components/Dishes/Dishes.js';
import './Menu.scss';

const Menu = () => {

    return (
        <>
            <div className="Menu">

                <div className="MenuSection">
                    <div className="container">
                        <div className="flexRow">
                            <div className="rightPane pane">
                                <CategoryMenu />
                            </div>
                            <div className="MenuDishes">
                                <Dishes />
                            </div>
                            <div className="leftPane pane">
                                <OrderType />
                                <Cart />
                                <OrderSummary />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Menu;