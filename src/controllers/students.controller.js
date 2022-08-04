const sharp = require('sharp');
const Student = require('../models/student.models/student.model');
const superheroStudent = require('../models/student.models/superhero-student.model');
const SCHeadStudent = require('../models/student.models/sc-head-student.model');
const { NotFoundError } = require('../utils/errors/request-errors');
const { validateUpdates } = require('./utils/validators.controller.utils');
const { studentsParameterSchemas } = require('./utils/parameter-schemas.controller.utils');

//	Add new department head
async function createHead(req, res, next) {
	try {
		const student = new SCHeadStudent({
			...req.body,
		});

		await student.save();

		res.status(201).send({ student });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Add new superhero
async function createSuperhero(req, res, next) {
	try {
		const student = new superheroStudent({
			...req.body,
		});

		await student.save();

		res.status(201).send({ student });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Get heads of the sc departments
async function getHeads(req, res, next) {
	try {
		const heads = await SCHeadStudent.find({});

		res.send({ heads });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Get all superheroes
async function getSuperheroes(req, res, next) {
	try {
		const superheroes = await superheroStudent.find({});

		res.send({ superheroes });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Update student
async function update(req, res, next) {
	try {
		const updates = Object.keys(req.body);

		//	Throws an error if request has invalid update fields
		validateUpdates(updates, studentsParameterSchemas.allowedUpdates);

		const student = await Student.findById(req.params.id);

		if (!student)
			throw new NotFoundError({
				type: 'student',
				id: req.params.id,
			});

		updates.forEach((update) => (student[update] = req.body[update]));

		await student.save();

		res.send({ student });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

// Delete student
async function remove(req, res, next) {
	try {
		const student = await Student.findByIdAndDelete(req.params.id);

		if (!student)
			throw new NotFoundError({
				type: 'student',
				id: req.params.id,
			});

		res.send({ student });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Add new image to student
async function createImage(req, res, next) {
	try {
		const student = await Student.findById(req.params.id);

		if (!student)
			throw new NotFoundError({
				type: 'student',
				id: req.params.id,
			});

		student.image = await sharp(req.file.buffer).resize({ height: 250 }).png().toBuffer();

		await student.save();

		res.send({ student });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

module.exports = {
	createImage,
	createSuperhero,
	createHead,
	getHeads,
	getSuperheroes,
	remove,
	update,
};
