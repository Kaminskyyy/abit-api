const express = require('express');
const articlesController = require('../controllers/articles.controller');
const { uploadImage } = require('../controllers/utils/upload-files.controller.utils');
const router = express.Router();

router.get('/', articlesController.get);

router.post('/', articlesController.create);

router.patch('/:id', articlesController.update);

router.delete('/:id', articlesController.remove);

router.post('/:id/image', uploadImage.single('article_image'), articlesController.createImage);

module.exports = router;
