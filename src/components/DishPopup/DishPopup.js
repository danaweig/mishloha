import React, { useState, useContext, useEffect, useRef } from 'react';
import DishPopupDetails from './DishPopupDetails/DishPopupDetails';
import './DishPopup.scss';
import dish from '../../assets/images/dish.jpg';
import closeIcon from '../../assets/images/close-modal-icon.png';
import { menuContext } from '../../contexts/store.js';
import CartItemQuantity from '../Cart/CartItemQuantity.js';

const DishPopup = (props) => {
    const { menuItems, closePopup, openPopup, updateCartQuantity } = useContext(menuContext);
    let dishItem = {};
    const [dish, setDish] = useState({ ...dishItem });
    let commentsInput = useRef(null);
    let newNameInput = useRef(null);

    useEffect(() => {
        dishItem = menuItems.find((item) => { return item.id === props.id });
        setDish({ ...dishItem });
    }, [props.id]);

    const increaseDish = () => {
        const newQ = dish.cartQuantity + 1;
        setDish({ ...dish, cartQuantity: newQ })
    }

    const decreaseDish = () => {
        let newQ = dish.cartQuantity - 1;
        if (newQ < 1) {
            newQ = 1;
        }
        setDish({ ...dish, cartQuantity: newQ })
    }

    const handleForm = (event) => {
        event.preventDefault();
        dishItem = menuItems.find((item) => { return item.id === props.id });

        const change = dish.cartQuantity - dishItem.cartQuantity;
        console.log(change);
        // setDish(
        //     {
        //         ...dish,
        //         cartQuantity: dish.cartQuantity,
        //         comments: commentsInput.current.value,
        //         newNameInput: newNameInput.current.value,
        //     });
        if (change != 0)
            updateCartQuantity(dish.id, change);
        closePopup();
    }
    return (
        <div className={props.opened ? "opened DishPopup" : "DishPopup"}>
            <div className="DishPopupContent">
                <button className="closeModal" onClick={closePopup}>
                    <img src={closeIcon} alt="search" />
                </button>
                {/* <DishPopupDetails
                    title={dish ? dish.title : ''}
                    description={dish ? dish.description : ''}
                    price={dish ? dish.price : ''}
                    tag={dish ? "popular" : []}
                    image={dish ? dish.image : ''}
                    liked={dish ? dish.liked : false}
                    likeCount={dish ? dish.likeCount : 'false'}
                /> */}
                <div className="DishPopupDetails">
                    <div className="overlay"></div>
                    <div className="flexRow">
                        <div className="DishImage">
                            <img src={dish ? dish.image : ''} alt={dish ? dish.title : ''} />
                        </div>
                        <div className="DishDetails">
                            <h2>{dish ? dish.title : ''}</h2>
                            <p>{dish ? dish.description : ''}</p>
                            <p className="price"><span>{dish ? dish.price : ''}</span><span>₪</span></p>
                            <p>{dish ? 1 : []}</p>
                            <p>LikeButton={dish ? dish.liked : false} {dish ? dish.likeCount : '0'} אהבו את זה</p>
                            <CartItemQuantity increase={() => increaseDish()}
                                decrease={() => decreaseDish()}
                                itemQuantity={dish ? dish.cartQuantity : 0} />

                        </div>
                    </div>
                </div>
                <div className="DishPopupMain">
                    <div className="DishPopupChanges">
                        <h3>הערות מיוחדות?</h3>
                        <div className="notes">
                            <textarea name="comments" placeholder="רשום הערות למטבח (אופציה)..."
                                ref={commentsInput}></textarea>
                            <textarea name="dish_new_name" placeholder="רשום שם למנה (אופציה)..." ref={newNameInput} ></textarea>
                        </div>
                    </div>
                    <div className="DishPopupFooter flexRow">
                        <button className="close" onClick={closePopup}>&#8249;</button>
                        <input type="submit" onClick={handleForm} value="הוסף להזמנה" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DishPopup;