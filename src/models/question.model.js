const mongoose = require('mongoose');
const schema = require('../db/schemas/question.schema');

const Question = mongoose.model('Question', schema);

module.exports = Question;
