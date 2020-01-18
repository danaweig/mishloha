import React, { Component } from 'react';
import DishPopup from '../../components/DishPopup/DishPopup.js';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <p>Menu</p>
                <DishPopup />
            </div>
        );
    }
}

export default Menu;