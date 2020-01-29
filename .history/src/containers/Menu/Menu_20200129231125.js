import React, { Component } from 'react';
import DishPopup from '../../components/DishPopup/DishPopup.js';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.js'
import Cart from '../../components/Cart/Cart.js';
import MenuContextProvider from '../../contexts/store.js';
class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <p>Menu</p>
                <DishPopup />
                <MenuContextProvider>
                    <CategoryMenu />
                </MenuContextProvider>
                <Cart />
            </div>
        );
    }
}

export default Menu;