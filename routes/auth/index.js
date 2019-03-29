"use strict"

const expresss = require('express');
const router = expresss.Router();

router.post('/signup', require('./signup'));
router.post('/signin', require('./signin'));
router.get('/verify/:key', require('./verify'));
router.post('/reset', require('./reset'));
router.get('/logout', require('./logout'));

module.exports = router;