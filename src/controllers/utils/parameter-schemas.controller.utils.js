const articlesGetPageParameters = {
	page: {
		type: 'Int',
		required: true,
	},
	itemsPerPage: {
		type: 'Int',
		required: false,
		default: 5,
	},
};

const articlesAllowedFeildsToChange = new Set(['title', 'url']);

module.exports = {
	articlesParameterSchemas: {
		getPage: articlesGetPageParameters,
		allowedUpdates: articlesAllowedFeildsToChange,
	},
};
