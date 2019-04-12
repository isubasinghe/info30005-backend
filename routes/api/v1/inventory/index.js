const express = require('express');
const router = express.Router();
const search = require('./search.js');
const listItem = require('./items.js');
const addItem = require('./add.js');
const removeItem = require('./remove.js');

router.post('/search', search.search);

router.post('/addItem', addItem.add);

router.post('/removeItem', removeItem.remove);

router.post('/listAllItems', listItem.listAllItems);


module.exports = router;
