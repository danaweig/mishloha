import React, { Component } from 'react';
import DishPopup from '../../components/DishPopup/DishPopup.js';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.js'

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <p>Menu</p>
                <DishPopup />
                <CategoryMenu />
            </div>
        );
    }
}

export default Menu;