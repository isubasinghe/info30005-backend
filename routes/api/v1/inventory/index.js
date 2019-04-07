const express = require('express');
const router = express.Router();
const searchController = require('./search.js');
const itemController = require('./items.js');

router.post('/search', searchController.search);

router.post('/addItem', itemController.addItem);

router.post('/removeItem', itemController.removeItem);

router.post('/listAllItems', itemController.listAllItems);

module.exports = router;
