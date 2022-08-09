const mongoose = require('mongoose');
const { toJSON } = require('../utils/helpers/method');
const { messageEntitiesSchema } = require('./message-entities.schema');

const questionSchema = new mongoose.Schema({
	question_id: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
		minLength: 4,
		trim: true,
	},
	entities: [messageEntitiesSchema],
	message_id: {
		type: Number,
		required: true,
	},
	author_chat_id: {
		type: Number,
		required: true,
	},
});

questionSchema.method('toJSON', toJSON);

module.exports = questionSchema;
