const mongoose = require('mongoose');
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
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

module.exports = questionSchema;
