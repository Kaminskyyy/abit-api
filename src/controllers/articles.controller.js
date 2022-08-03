const Article = require('../models/article.model');
const sharp = require('sharp');
const { RequestError, NotFoundError } = require('../utils/errors/request-errors');
const { validateQueryString, validateUpdates } = require('./utils/validators.controller.utils');
const { articlesParameterSchemas } = require('./utils/parameter-schemas.controller.utils');

//	Get all articles
async function get(req, res, next) {
	console.log(req.query);

	//
	//	TODO
	//	?Query for images?
	//

	try {
		const articles = await Article.find({});

		res.send({ articles });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Create new article
async function create(req, res, next) {
	try {
		const article = new Article({
			title: req.body.title,
			url: req.body.url,
		});

		await article.save();

		res.status(201).send({ article });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

//	Update existing article
async function update(req, res, next) {
	try {
		const updates = Object.keys(req.body);

		//	Throws an error if request has invalid update fields
		validateUpdates(updates, articlesParameterSchemas.allowedUpdates);

		const article = await Article.findById(req.params.id);

		if (!article)
			throw new NotFoundError({
				type: 'article',
				id: req.params.id,
			});

		updates.forEach((update) => (article[update] = req.body[update]));

		await article.save();

		res.status(201).send({ article });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

async function remove(req, res, next) {
	try {
		const article = await Article.findByIdAndDelete(req.params.id);

		if (!article)
			throw new NotFoundError({
				type: 'article',
				id: req.params.id,
			});

		res.status(200).send({ article });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

async function createImage(req, res, next) {
	try {
		const buffer = await sharp(req.file.buffer).resize({ height: 250 }).png().toBuffer();

		const article = await Article.findById(req.params.id);

		if (!article)
			throw new NotFoundError({
				type: 'article',
				id: req.params.id,
			});

		article.image = buffer;

		await article.save();
		res.send({ article });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

async function getPage(req, res, next) {
	try {
		//	Throws an error in case if parameters are invalid!
		let { page, itemsPerPage } = validateQueryString(req.query, articlesParameterSchemas.getPage);

		const [articles, navigation] = await Article.getPage(page, itemsPerPage);

		res.send({
			articles,
			navigation,
		});
	} catch (error) {
		console.error(error);
		next(error);
	}
}

async function errorHandler(error, req, res, next) {
	if (res.headersSent) {
		return next(error);
	}

	if (error instanceof RequestError) {
		return res.status(error.responseStatus).send(error.responseBody);
	}

	next(error);
}

module.exports = {
	create,
	get,
	update,
	remove,
	createImage,
	getPage,
	errorHandler,
};
