const Question = require('../models/question.model');
const { questionsParameterSchemas } = require('./utils/parameter-schemas.controller.utils');
const { validateUpdates } = require('./utils/validators.controller.utils');
const { NotFoundError } = require('../utils/errors/request-errors');

//	Get question by question id
async function get(req, res, next) {
	try {
		const question = await Question.findOne({ question_id: req.params.id });

		if (!question)
			throw new NotFoundError({
				type: 'question',
				question_id: req.params.id,
			});

		res.send({ question });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Create new qeustion
async function create(req, res, next) {
	try {
		const question = new Question({
			...req.body,
		});

		await question.save();

		res.status(201).send({ question });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Update question
async function update(req, res, next) {
	try {
		const updates = Object.keys(req.body);
		//	Throws errors
		validateUpdates(updates, questionsParameterSchemas.allowedUpdates);

		const question = await Question.findOne({ question_id: req.params.id });
		if (!question)
			throw new NotFoundError({
				type: 'question',
				question_id: req.params.id,
			});

		updates.forEach((update) => (question[update] = req.body[update]));
		await question.save();

		res.send({ question });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Delete qeustion
async function remove(req, res, next) {
	try {
		const question = await Question.findOneAndDelete({ question_id: req.params.id });
		if (!question)
			throw new NotFoundError({
				type: 'question',
				question_id: req.params.id,
			});

		res.send({ question });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

module.exports = {
	get,
	create,
	update,
	remove,
};
