const express = require('express');
const articlesController = require('../controllers/articles.controller');
const { uploadImage } = require('../controllers/utils/upload-files.controller.utils');
const router = express.Router();

//	Get all articles
router.get('/', articlesController.get);

//	Create new article
router.post('/', articlesController.create);

//	Update existing article
router.patch('/:id', articlesController.update);

//	Delete article
router.delete('/:id', articlesController.remove);

//	Add image to article
router.post('/:id/image', uploadImage.single('article_image'), articlesController.createImage);

module.exports = router;
