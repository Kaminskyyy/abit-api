const { typeCheck } = require('type-check');
const { RequiredQueryError, InvalidQueryTypeError } = require('../../utils/errors/request-errors');

//	Query parameters validator
function validateQueryString(queryObject, parametersSchema) {
	const queries = new Set(Object.keys(queryObject));

	for (let parameter in parametersSchema) {
		//	Checks required parameters
		if (parametersSchema[parameter].required && !queries.has(parameter)) {
			throw new RequiredQueryError(parameter);
		}

		//	Set default value in case if optional paramater has omitted
		if (!queries.has(parameter)) {
			queryObject[parameter] = parametersSchema[parameter].default;
		}

		//	Typecast
		if (parametersSchema[parameter].type === 'Int') {
			queryObject[parameter] = parseInt(queryObject[parameter]);
		}

		//	Typecast
		if (parametersSchema[parameter].type === 'Float') {
			queryObject[parameter] = parseFloat(queryObject[parameter]);
		}

		//	Type check
		if (!typeCheck(parametersSchema[parameter].type, queryObject[parameter])) {
			throw new InvalidQueryTypeError(parameter, parametersSchema[parameter].type);
		}
	}

	//	Return validated query
	return queryObject;
}

//	Updates validator
function validateUpdates(updateFields, allowedUpdates) {
	const invalidUpdates = updateFields.filter((update) => !allowedUpdates.has(update));
	if (invalidUpdates.length > 0) throw new InvalidUpdatesError(invalidUpdates);
}

module.exports = { validateQueryString, validateUpdates };
