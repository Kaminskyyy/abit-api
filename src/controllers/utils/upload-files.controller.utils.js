const multer = require('multer');

const uploadImage = multer({
	limits: 10000000,
});

module.exports = { uploadImage };
