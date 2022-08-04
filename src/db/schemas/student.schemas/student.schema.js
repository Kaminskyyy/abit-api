const mongoose = require('mongoose');
const { toJSON } = require('../../utils/helpers/method');

const studentSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
		trim: true,
		min: 3,
	},
	last_name: {
		type: String,
		required: true,
		trim: true,
		min: 3,
	},
	group: {
		type: String,
		require: true,
	},
	image: {
		type: Buffer,
	},
	contacts: {
		telegram: {
			type: String,
			required: true,
		},
	},
});

studentSchema.method('toJSON', toJSON);

module.exports = studentSchema;
