async function getPage(page, itemsPerPage = 5, exclude = [], query = {}) {
	const Model = this;

	page = +page;
	itemsPerPage = +itemsPerPage;

	exclude.push('-__v');
	exclude.push('-__t');

	const items = await Model.aggregate()
		.match(query)
		.skip((page - 1) * itemsPerPage)
		.limit(itemsPerPage)
		.project(exclude.join(' '));

	const totalItemsNum = await Model.countDocuments(query);

	console.log(totalItemsNum);

	const pages = {
		current: page,
		left: page > 1 ? page - 1 : null,
		right: totalItemsNum - page * itemsPerPage > 0 ? page + 1 : null,
	};

	return [items, pages];
}

module.exports = { getPage };
