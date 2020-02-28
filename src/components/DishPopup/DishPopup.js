import React, { useState, useContext, useEffect, useRef } from 'react';
import './DishPopup.scss';
import dish from '../../assets/images/dish.jpg';
import closeIcon from '../../assets/images/close-modal-icon.png';
import { menuContext } from '../../contexts/store.js';
import CartItemQuantity from '../Cart/CartItemQuantity.js';
import DishTag from '../DishTag/DishTag.js';
import Dish from 'components/Dish/Dish';
import { connect } from 'net';

const DishPopup = (props) => {
    const { menuItems, cartItems, closePopup, openPopup, updateCartQuantity,/* updateFields*/ } = useContext(menuContext);
    let dishItem = {};
    let dishInCart = {};
    let index;
    const [dish, setDish] = useState({ ...dishItem });
    let commentsInput = useRef(null);
    let newNameInput = useRef(null);


    useEffect(() => {
        dishItem = menuItems.find((item) => { return item.id === props.id });
        dishInCart = cartItems.find((item) => { return item.id === props.id });
        index = cartItems.findIndex((item) => { return item.id === props.id });
        
        if (dishInCart) {

            if (dishInCart.cartQuantity === 0) {
                setDish({ ...dishItem, cartQuantity: 1 });
            } else {
                setDish({ ...dishItem, 
                    cartQuantity: dishInCart.cartQuantity, 
                    comments: dishInCart.comments, 
                    dishOwner: dishInCart.dishOwner });
                    commentsInput.current.value = dishInCart.comments;
                    newNameInput.current.value = dishInCart.dishOwner;

            }
        } else {
            setDish({ ...dishItem, cartQuantity: 1 });
        }
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
        dishInCart = cartItems.find((item) => { return item.id === props.id });
        const change = dish.cartQuantity - (dishInCart ? dishInCart.cartQuantity : 0);
        console.log(dish)
        setDish(
            {
                ...dish,
                cartQuantity: dish.cartQuantity,
                comments: commentsInput.current.value,
                dishOwner: newNameInput.current.value
            });
        if (dish !== dishItem) {
            if(commentsInput.current.value !== ""){
                dish.comments = commentsInput.current.value;
             };
             if(newNameInput.current.value !== ""){
                dish.dishOwner = newNameInput.current.value;
             };
            updateCartQuantity(dish.id, dish, change);
        }
        console.log(dish);
        closePopup();
        
        commentsInput.current.value = null;
        newNameInput.current.value = null;
               
    }
    const style = dish ? { backgroundImage: `url(${dish.image})` } : '';
    return (
        <div className={props.opened ? "opened DishPopup" : "DishPopup"}>
        
            <div className="overlayModal" onClick={closePopup}></div>
            <div className="DishPopupContent">
                <button className="closeModal" onClick={closePopup}>
                    <img src={closeIcon} alt="search" />
                </button>
                <div className="DishPopupDetails" style={style}>
                    <div className="overlay"></div>
                    <div className="flexRow">
                        <div className="DishImage">
                            <img src={dish ? dish.image : ''} alt={dish ? dish.title : ''} />
                        </div>
                        <div className="DishDetails">
                            <h2>{dish ? dish.title : ''}</h2>
                            <p>{dish ? dish.desc : ''}</p>
                            <p className="price"><span>{dish ? dish.price : ''}</span><span>₪</span></p>
                            <DishTag tag={dish && dish.tag ? dish.tag : []} />
                            <p>{dish ? dish.liked : false} {dish ? dish.likeCount : '0'} אהבו מנה זו</p>
                            <div className="dishQuantity">
                                <p>כמות לבחירה</p>
                                <CartItemQuantity increase={() => increaseDish()}
                                    decrease={() => decreaseDish()}
                                    itemQuantity={dish ? dish.cartQuantity : 0} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DishPopupMain">
                    <div className="DishPopupChanges">
                        <h3>הערות מיוחדות?</h3>
                        <div className="notes">
                            <textarea name="comments" placeholder="רשום הערות למטבח (אופציה)..."
                                ref={commentsInput}>{}</textarea>
                            <textarea name="dish_new_name" placeholder="רשום שם למנה (אופציה)..." ref={newNameInput} >{}</textarea>
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