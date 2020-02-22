const express = require('express');

const app = express();

app.get("/api/menu", (req, res) => {
    const menu = [
        {
            id: 1593,
            title: "פאוור פרש",
            desc: "גזר ,כרוב לבן ואדום, נבטים, ג'ינג'ר, בצל ירוק, עלי כוסברה, נענע,  שומשום, ברוטב תאילנדי מסורתי.  ",
            price: 34,
            image: "images/dish2.jpg",
            tag: [3],
            liked: false,
            cartQuantity: 0,
            itemCategory: 3,
            likeCount: 0,
      
          },
          {
            id: 1594,
            title: "קריספי צ'יקן",
            desc: "עוף בציפוי טמפורה ופצפוצי אורז, עם רוטב בברבקיו קוריאני.",
            price: 36,
            image: "images/dish1.jpg",
            tag: [1,2,3],
            liked: false,
            cartQuantity: 0,
            itemCategory: 4,
            likeCount: 1,
      
          },
          {
            id: 1595,
            title: "חמוצים יפניים",
            desc: "כרוב לבן, גזר, מלפפון ופלפלים בתחמיץ מתקתק. עם שומשום מעל. ",
            price: 24,
            image: "images/dish2.jpg",
            tag: [2],
            liked: false,
            cartQuantity: 0,
            itemCategory: 5,
            likeCount: 2,
      
          }
    ];
    res.json(menu);
});

const port = 5000;

app.listen(port, () => console.log(`${port} is active`));