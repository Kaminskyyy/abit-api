const mongoose = require('mongoose');
const schema = require('../db/schemas/user.schema');

const User = mongoose.model('User', schema);

module.exports = User;
