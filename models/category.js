const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
	name: String,
	image: String,
	countInStock: {
		type: Number,
		required: true
	}
});

exports.Category = mongoose.model('Category', categorySchema);