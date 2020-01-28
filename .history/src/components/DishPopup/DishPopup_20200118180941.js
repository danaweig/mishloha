import React, { useState } from 'react';
import DishPopupHeader from './DishPopupDetails/DishPopupDetails';
import './DishPopup.scss';
import dish from '../../assets/images/dish.jpg';
import closeIcon from '../../assets/images/close-modal-icon.png';


const DishPopup = () => {

    const [opened, changeState] = useState(false);
    const closePopup = () => {
        changeState(false);
    }
    return (
        <div className={opened ? "opened DishPopup" : "DishPopup"}>
            <div className="DishPopupContent">
                <button className="closeModal" onClick={closePopup}><img src={closeIcon} alt="search" /></button>
                <DishPopupHeader />
                <div className="DishPopupMain">
                    <div className="DishPopupChanges">
                        <h3>הערות מיוחדות?</h3>
                        <div className="notes">
                            <textarea name="comments" placeholder="רשום הערות למטבח (אופציה)..."></textarea>
                            <textarea name="dish_new_name" placeholder="רשום שם למנה (אופציה)..."></textarea>
                        </div>
                    </div>
                    <div className="DishPopupFooter flexRow">
                        <button className="close" onClick={closePopup}>&#8249;</button>
                        <input type="submit" value="הוסף להזמנה" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishPopup;