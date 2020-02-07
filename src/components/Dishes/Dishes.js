import React, { useContext } from 'react';
// import restLogo from '../../assets/images/restLogo.png';
import { menuContext } from '../../contexts/store.js';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import Dish from '../Dish/Dish';

import './Dishes.scss';

const Dishes = (props) => {
    const { menuTitles } = useContext(menuContext);
    const { menuItems } = useContext(menuContext);
    let menuItemsFiltered;
    menuItems.sort(function (a, b) {
        return a.itemCategory - b.itemCategory;
    });
    return (
        <div className="Dishes" >
            {console.log(menuItems)}
            {
                menuTitles.map(catItem => {
                    return (
                        <div>
                            <CategoryTitle key={catItem.id}
                                title={catItem.title}
                                desc={catItem.desc} id={catItem.id} />
                            <div>
                                {
                                    menuItems.filter(item => {
                                        return item.itemCategory === catItem.id
                                    }).map(item => {
                                        return (
                                            <Dish
                                                id={item.id}
                                                key={item.id}
                                                title={item.title}
                                                desc={item.desc}
                                                price={item.price}
                                                tag={item.tag}
                                                liked={item.liked}
                                                cartQuantity={item.cartQuantity}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
};

export default Dishes;