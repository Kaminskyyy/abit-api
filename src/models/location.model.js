const mongoose = require('mongoose');
const schema = require('../db/schemas/location.schema');

const Location = mongoose.model('Location', schema);

module.exports = Location;
