const SCHeadStudentSchema = require('../../db/schemas/student.schemas/sc-head-student.schema');
const Student = require('../student.models/student.model');

const SCHeadStudent = Student.discriminator('SCHeadStudent', SCHeadStudentSchema, {
	disriminatorKey: 'SCHead',
});

module.exports = SCHeadStudent;
