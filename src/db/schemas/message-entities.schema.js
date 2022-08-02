const mongoose = require('mongoose');

const messageEntitiesSchema = new mongoose.Schema({
	type: String,
	offset: Number,
	length: Number,
	url: String,
	language: String,
});

module.exports = { messageEntitiesSchema };
