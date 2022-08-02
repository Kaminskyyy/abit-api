const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	chat_id: {
		type: String,
		required: true,
		uniqe: true,
		trim: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	notifications: {
		type: Boolean,
		required: true,
	},
});

userSchema.virtual('questions', {
	ref: 'Question',
	localField: '_id',
	foreignField: 'author',
});

module.exports = userSchema;
