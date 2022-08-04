const superheroStudentScheama = require('../../db/schemas/student.schemas/superhero-student.schema');
const Student = require('../student.models/student.model');

const superheroStudent = Student.discriminator('SuperheroStudent', superheroStudentScheama, {
	disriminatorKey: 'Superhero',
});

module.exports = superheroStudent;
