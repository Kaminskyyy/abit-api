const mongoose = require('mongoose');

const SCHeadStudentSchema = new mongoose.Schema({
	head_of_department: {
		type: String,
		required: true,
	},
});

module.exports = SCHeadStudentSchema;
