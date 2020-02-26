import React, { useContext } from 'react';
// import restLogo from '../../assets/images/restLogo.png';
import { menuContext } from '../../contexts/store.js';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import Dish from '../Dish/Dish';
import DishPopup from '../DishPopup/DishPopup';

import './Dishes.scss';

const Dishes = (props) => {
    const { menuTitles } = useContext(menuContext);
    const { menuItems } = useContext(menuContext);
    const { popup } = useContext(menuContext);

    let menuItemsFiltered;
    menuItems.sort(function (a, b) {
        return a.itemCategory - b.itemCategory;
    });
    return (
        <>
            <DishPopup opened={popup.is_opened} id={popup.id} />

            <div className="Dishes" >
                {
                    menuTitles.map(catItem => {
                        return (
                            <div>
                                <CategoryTitle key={catItem._id}
                                    title={catItem.title}
                                    desc={catItem.desc} id={catItem._id} />
                                <div>
                                    {
                                        menuItems.filter(item => {
                                            return item.itemCategory === catItem._id
                                        }).map(item => {
                                            return (
                                                <Dish
                                                    id={item._id}
                                                    key={item._id}
                                                    title={item.title}
                                                    desc={item.desc}
                                                    price={item.price}
                                                    tag={item.tag}
                                                    liked={item.liked}
                                                    cartQuantity={item.cartQuantity}
                                                    image={item.image}
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

        </>
    );
};

export default Dishes;