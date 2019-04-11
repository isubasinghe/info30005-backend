const express = require('express');
const router = express.Router();
const recipe = require('./generate.js')

router.post('/generate', recipe.generate);