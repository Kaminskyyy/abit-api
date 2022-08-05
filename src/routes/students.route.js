const express = require('express');
const studentsController = require('../controllers/students.controller');
const { uploadImage } = require('../controllers/utils/upload-files.controller.utils');
const router = new express.Router();

//	Get heads of the sc departments
router.get('/heads', studentsController.getHeads);

//	Add new department head
router.post('/heads', studentsController.createHead);

//	Get all superheroes
router.get('/superheroes', studentsController.getSuperheroes);

//	Add new superhero
router.post('/superheroes', studentsController.createSuperhero);

//	Update student
router.patch('/:id', studentsController.update);

// Delete student
router.delete('/:id', studentsController.remove);

//	Add new image to student
router.post('/:id/image', uploadImage.single('student_image'), studentsController.createImage);

module.exports = router;
