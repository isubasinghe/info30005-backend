"use strict"
const express = require('express');
const router = express.Router();


const inventory = require('../controllers/inventory.js');
const recipe = require('../controllers/generate.js');
const marketplace = require('../controllers/marketplace.js');
const userAuth = require('../controllers/userAuth.js');



router.post('/api/v1/inventory/search', marketplace.search);

router.post('/api/v1/inventory/addItem', inventory.add);
router.post('/api/v1/inventory/removeItem', inventory.remove);
router.post('/api/v1/inventory/listAllItems', inventory.listAllItems);
router.post('/api/v1/inventory/increaseQuantity', inventory.increase);
router.post('/api/v1/inventory/decreaseQuantity', inventory.decrease);

router.post('/api/v1/recipe/generate', recipe.generate);

router.post('/auth/signup', userAuth.signup);
router.post('/auth/signin', userAuth.signIn);
router.get('/auth/verify/:key', userAuth.verify);
router.post('/auth/reset', userAuth.reset);
router.get('/auth/logout', userAuth.logOut);

module.exports = router;