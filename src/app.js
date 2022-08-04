//	Load environment variables
require('dotenv').config();

//	connect mongoose
require('./db/mongoose.db');

const express = require('express');
const cors = require('cors');
const articlesRouter = require('./routes/articles.route');
const studentsRouter = require('./routes/students.route');

const { generalErrorHandler, requestErrorHandler } = require('./middleware/error-handlers');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.text({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ parameterLimit: 10000000, limit: '50mb', extended: true }));
app.use(express.raw({ limit: '50mb' }));
app.use(express.json());

//	Routers
app.use('/api/articles', articlesRouter);
app.use('/api/students', studentsRouter);

//	Error handlers
app.use(requestErrorHandler);
app.use(generalErrorHandler);

module.exports = {
	app,
};
