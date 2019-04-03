const express = require('express');
const router = express.Router();
var controller = require('./search.js');

router.post('/search', controller.search);



module.exports = router;
