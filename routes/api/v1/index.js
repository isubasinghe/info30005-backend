"use strict"

const express = require('express')
const router = express.Router();

const inventoryRoutes = require('./inventory');
const recipeRoutes = require('./recipe');


router.use("/inventory", inventoryRoutes);

router.use("/recipe", recipeRoutes);

module.exports = router;