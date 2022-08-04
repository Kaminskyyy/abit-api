const mongoose = require('mongoose');
const studentSchema = require('../../db/schemas/student.schemas/student.schema');

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
