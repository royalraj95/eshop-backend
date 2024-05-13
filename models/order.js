const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
	name: String,
	image: String,
	countInStock: {
		type: Number,
		required: true
	}
});

exports.Order = mongoose.model('Order', orderSchema);