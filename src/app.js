//	Load environment variables
require('dotenv').config();

//	connect mongoose
require('./db/mongoose.db');

const express = require('express');
const cors = require('cors');
const articlesRouter = require('./routes/articles.route');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.text({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ parameterLimit: 10000000, limit: '50mb', extended: true }));
app.use(express.raw({ limit: '50mb' }));
app.use(express.json());

app.use('/api/articles', articlesRouter);

app.use((error, req, res, next) => {
	if (res.headersSent) {
		return next(error);
	}

	console.log(error);

	res.status(500).send({
		error: error.messsage,
	});
});

module.exports = {
	app,
};
