"use strict"
const express = require('express');
const router = express.Router();


const inventory = require('../controllers/inventory.js');
const recipe = require('../controllers/generate.js');
const marketplace = require('../controllers/marketplace.js');
const userAuth = require('../controllers/userAuth.js');



router.post('/search', marketplace.search);

router.post('/addItem', inventory.add);
router.post('/removeItem', inventory.remove);
router.post('/listAllItems', inventory.listAllItems);

router.post('/generateRecipe', recipe.generate);

router.post('/signup', userAuth.signup);
router.post('/signin', userAuth.signIn);
router.get('/verify/:key', userAuth.verify);
router.post('/reset', userAuth.reset);
router.get('/logout', userAuth.logOut);

module.exports = router;