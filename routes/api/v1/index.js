"use strict"

const express = require('express')
const router = express.Router();

const inventoryRoutes = require('./inventory');



router.use("/inventory", inventoryRoutes);

module.exports = router;