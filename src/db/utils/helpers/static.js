async function getPage(page, itemsPerPage = 5) {
	const Model = this;

	const items = await Model.aggregate()
		.skip((page - 1) * itemsPerPage)
		.limit(itemsPerPage)
		.project({ image: 0 });

	console.log(items);

	const totalItemsNum = await Model.estimatedDocumentCount();

	const pages = {
		current: page,
		left: page > 1 ? page - 1 : null,
		right: totalItemsNum - page * itemsPerPage > 0 ? page + 1 : null,
	};

	return [items, pages];
}

module.exports = { getPage };
