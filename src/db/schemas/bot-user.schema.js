const mongoose = require('mongoose');
const { toJSON } = require('../utils/helpers/method');

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
	localField: 'chat_id',
	foreignField: 'author',
});

userSchema.method('toJSON', toJSON);

module.exports = userSchema;
