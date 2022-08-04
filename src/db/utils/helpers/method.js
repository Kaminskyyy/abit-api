function toJSON() {
	const item = this;

	const itemObject = item.toObject();

	delete itemObject.__v;
	delete itemObject.__t;

	return itemObject;
}

module.exports = { toJSON };
