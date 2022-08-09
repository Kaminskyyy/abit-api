const mongoose = require('mongoose');
const schema = require('../db/schemas/bot-user.schema');

const BotUser = mongoose.model('BotUser', schema);

module.exports = BotUser;
