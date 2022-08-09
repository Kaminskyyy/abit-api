const studentsQueryString = {
	page: {
		type: 'Number',
		required: false,
		default: null, // null = all
	},
	itemsPerPage: {
		type: 'Number',
		required: false,
		default: 5,
	},
	images: {
		type: 'Number',
		required: false,
		default: 1,
	},
	speciality: {
		type: 'Number',
		required: false,
		default: null, // null = all
		allowedValues: [122, 124],
	},
};

const articlesQueryString = {
	page: {
		type: 'Number',
		required: false,
		default: null,
	},
	itemsPerPage: {
		type: 'Number',
		required: false,
		default: 5,
	},
	images: {
		type: 'Number',
		required: false,
		default: 1,
	},
};

const articlesAllowedFeildsToChange = new Set(['title', 'url']);

const studentsAllowedFiedlsToChangle = new Set([
	'first_name',
	'last_name',
	'group',
	'year',
	'head_of_department',
	'contacts',
	'speciality',
	'university_department',
	'educational_program',
	'dorm',
]);

const questionsAllowedFieldsToChange = new Set(['message_id']);

module.exports = {
	articlesParameterSchemas: {
		allowedUpdates: articlesAllowedFeildsToChange,
		getQueryString: articlesQueryString,
	},
	studentsParameterSchemas: {
		allowedUpdates: studentsAllowedFiedlsToChangle,
		superheroesQueryString: studentsQueryString,
	},
	questionsParameterSchemas: {
		allowedUpdates: questionsAllowedFieldsToChange,
	},
};
