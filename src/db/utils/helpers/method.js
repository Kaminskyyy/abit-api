function toJSON() {
	const item = this;

	const itemObject = item.toObject();

	delete itemObject.__v;

	return itemObject;
}

module.exports = { toJSON };
