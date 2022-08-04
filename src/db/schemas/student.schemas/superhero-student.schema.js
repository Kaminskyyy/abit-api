const mongoose = require('mongoose');

//
//	TODO
//	Add some additional info about superhero
//

const superheroStudentSchema = new mongoose.Schema({
	additional_info: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
});

module.exports = superheroStudentSchema;
