const paginationQueryParameters = {
	page: {
		type: 'Int',
		required: false,
		default: undefined,
	},
	itemsPerPage: {
		type: 'Int',
		required: false,
		default: 5,
	},
	images: {
		type: 'Int',
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
	'additional_info',
	'contacts',
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
