const mongoose = require('mongoose');
const schema = require('../db/schemas/article.schema');

const Article = mongoose.model('Article', schema);

module.exports = Article;
