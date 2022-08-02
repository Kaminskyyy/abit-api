const mongoose = require('mongoose');
const { articleURLValidator } = require('../utils/validators/validators');
const { getPage } = require('../utils/helpers/static');
const { toJSON } = require('../utils/helpers/method');

const articleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		min: 4,
	},
	section: {
		type: String,
		required: true,
		trim: true,
		min: 4,
	},
	url: {
		type: String,
		required: true,
		trim: true,
		validate: [articleURLValidator, 'Invalid URL'],
	},
	image: {
		type: Buffer,
	},
});

articleSchema.method('toJSON', toJSON);

articleSchema.static('getPage', getPage);

module.exports = articleSchema;
