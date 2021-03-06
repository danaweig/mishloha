const express = require('express');
const path = require('path');
const { setDb } = require("./db");



const app = express();

//Setting DB
setDb();

//Middlewares

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});*/
app.use("/", express.static(path.join(__dirname, '../client/build')));

//MenuItems API Routes
app.use('/api/menuItems', require('./api/routes/menuItems'));
app.use('/api/categories', require('./api/routes/categories'));
app.use('/api/restaurants', require('./api/routes/restaurants'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });
