const mongoose = require('mongoose');

//
//	TODO
//	Add some additional info about superhero
//

const superheroStudentSchema = new mongoose.Schema({
	year: {
		type: Number,
		required: true,
		min: 1,
		max: 6,
	},
	speciality: {
		type: Number,
		required: true,
	},
	university_department: {
		type: String,
		required: true,
		trim: true,
	},
	educational_program: {
		type: String,
		required: true,
		trim: true,
	},
	dorm: {
		type: Number,
		required: true,
	},
});

module.exports = superheroStudentSchema;
