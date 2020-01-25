import React from 'react';
import './RestaurantDescription.scss';
import Map from '../../../assets/images/static-map.png';

const RestaurantDescription = () => {
    return (
        <div className="RestaurantDescription">
            <div class="container">
                <div class="flexRow">
                    <div class="restDesc">
                        <h2>הסושיה בן יהודה</h2>
                        <p>הסושיה ברחוב בן יהודה תל אביב מתמחה בהגשת סושי מהיר, טרי ואיכותי לתושבי תל אביב והאזור ועושה זאת בהצלחה כבר משנת 2003.  צוות הסושיה תל אביב מתאפיין בהכנה זריזה של מגוון מנות אורה מאקי, קונוסים שונים, שלל סוגי אינסאייד אווט, סושי מאקי, ניגירי וסלטים יפנים מיוחדים. בנוסף הסושיה תל אביב מאפשרת ללקוחותיה להזמין גם מגשי קומבינציה מיוחדים במחירים משתלמים לארוחות משותפות, אירוח עסקי, אירועים פרטיים ועוד. במקום ישנן מנות רבות המבוססות על הדגים טריים במקביל לאפשרויות הצמחוניות המיוחדות, רשת הסושיה תל אביב מקפידה על הסטנדרטים הגבוהים ביותר בתחום החל ממוצרים איכותיים ביותר ועד לשירות קשוב, מהיר ואמין כולל הפעלת שירות שליחים זמין ויעיל.</p>
                    </div>
                    <div class="map">
                        <img src={Map} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDescription;