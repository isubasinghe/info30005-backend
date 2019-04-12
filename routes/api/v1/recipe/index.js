const express = require('express');
const router = express.Router();
const recipe = require('./generate.js')

//Routes for recipes
router.post('/generate', recipe.generate);

module.exports = router;