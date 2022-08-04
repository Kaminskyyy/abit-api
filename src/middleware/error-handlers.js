const { RequestError } = require('../utils/errors/request-errors');

function requestErrorHandler(error, req, res, next) {
	if (res.headersSent) {
		return next(error);
	}

	if (error instanceof RequestError) {
		return res.status(error.responseStatus).send(error.responseBody);
	}

	next(error);
}

function generalErrorHandler(error, req, res, next) {
	if (res.headersSent) {
		return next(error);
	}

	res.status(500).send({
		error: error.message,
	});
}

module.exports = {
	requestErrorHandler,
	generalErrorHandler,
};
