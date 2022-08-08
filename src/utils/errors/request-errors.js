const { Query } = require('mongoose');

class RequestError extends Error {
	constructor(error) {
		super(error.message);
		this.name = 'RequestError';
		this.responseStatus = error.responseStatus;
		this.responseBody = error.responseBody;
		this.responseBody.error = error.message;
	}
}

class InvalidUpdatesError extends RequestError {
	constructor(invalidUpdateFields) {
		super({
			message: 'Some of the sent fields are invalid updates',
			responseStatus: 400,
			responseBody: {
				invalid_updates: invalidUpdateFields,
			},
		});

		this.name = 'InvalidUpdatesError';
	}
}

class RequiredFieldError extends RequestError {
	constructor(missingField) {
		super({
			message: 'Missing a required field',
			responseStatus: 400,
			responseBody: {
				missing_field: missingField,
			},
		});

		this.name = 'RequiredFieldError';
	}
}

class RequiredQueryError extends RequestError {
	constructor(query) {
		super({
			message: 'Required queries are missing',
			responseStatus: 400,
			responseBody: {
				missing_query: query,
			},
		});

		this.name = 'RequiredQueryError';
	}
}

class InvalidQueryTypeError extends RequestError {
	constructor(query, mustBeOfType) {
		super({
			message: 'Invalid query parameter type',
			responseStatus: 400,
			responseBody: {
				query: {
					parameter: query,
					must_be_of_type: mustBeOfType,
				},
			},
		});

		this.name = 'InvalidQueryTypeError';
	}
}

class InvalidQueryValueError extends RequestError {
	constructor(query, validValues) {
		super({
			message: 'Invalid query parameter value',
			responseStatus: 400,
			responseBody: {
				query: {
					parameter: query,
					valid_values: validValues,
				},
			},
		});

		this.name = 'InvalidQueryValueError';
	}
}

class NotFoundError extends RequestError {
	constructor(requestedObject) {
		super({
			message: 'The requested object was not found',
			responseStatus: 404,
			responseBody: {
				requested_object: requestedObject,
			},
		});

		this.name = 'NotFoundError';
	}
}

module.exports = {
	RequestError,
	InvalidUpdatesError,
	NotFoundError,
	RequiredQueryError,
	InvalidQueryTypeError,
	InvalidQueryValueError,
	RequiredFieldError,
};
