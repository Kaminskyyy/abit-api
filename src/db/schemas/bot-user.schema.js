const mongoose = require('mongoose');
const { toJSON } = require('../utils/helpers/method');

const botUserSchema = new mongoose.Schema({
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

botUserSchema.method('toJSON', toJSON);

module.exports = botUserSchema;
