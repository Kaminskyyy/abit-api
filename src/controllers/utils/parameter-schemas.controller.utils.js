const paginationQueryParameters = {
	page: {
		type: 'Number',
		required: false,
		default: undefined,
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

module.exports = {
	common: {
		paginationQueryParameters,
	},
	articlesParameterSchemas: {
		allowedUpdates: articlesAllowedFeildsToChange,
	},
	studentsParameterSchemas: {
		allowedUpdates: studentsAllowedFiedlsToChangle,
	},
};
