const Article = require('../models/article.model');
const sharp = require('sharp');

async function get(req, res, next) {
	try {
		const articles = await Article.find({});

		res.send({ articles });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

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

async function update(req, res, next) {
	const updates = Object.keys(req.body);
	const allowedFeildsToChange = new Set(['title', 'url']);

	try {
		const isValidUpdates = updates.every((update) => allowedFeildsToChange.has(update));
		if (!isValidUpdates) throw new Error('Invalid updates');

		const article = await Article.findById(req.params.id);

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

		res.status(200).send({ article });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

async function createImage(req, res, next) {
	const buffer = await sharp(req.file.buffer).resize({ height: 250 }).png().toBuffer();

	try {
		const article = await Article.findById(req.params.id);

		if (!article) return res.status(404).send();

		article.image = buffer;

		await article.save();
		res.send({ article });
	} catch (error) {
		console.error(error);
		next(error);
	}
}

module.exports = {
	create,
	get,
	update,
	remove,
	createImage,
};
