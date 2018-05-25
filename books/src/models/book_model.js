const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	name: String,
	type: { type: String, default: "Book" },
	createdAt: { type: Date, default: Date.bow }
});

module.exports = mongoose.model("Book", BookSchema);