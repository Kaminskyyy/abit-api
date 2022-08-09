const express = require('express');
const { get } = require('../controllers/questions.controller');
const questionsController = require('../controllers/questions.controller');

const router = express.Router();

//	Get question by question id
router.get('/:id', questionsController.get);

//	Post new question
router.post('/', questionsController.create);

//	Update question
router.patch('/:id', questionsController.update);

// 	Delete question
router.delete('/:id', questionsController.remove);

module.exports = router;
