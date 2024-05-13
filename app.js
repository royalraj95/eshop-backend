// Imports
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { Schema } = mongoose;

require('dotenv/config');

const api = process.env.API_URL;

// Routes
const categoriesRoutes = require('./routes/categories');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);


mongoose.connect(process.env.CONNECTION_STRING).then(r => {
	console.log('Database connection is ready');
}).catch(err => {
	console.log(err);
});

app.listen(3000, () => {
	console.log(api);
	console.log('Server is running on http://localhost:3000');
});