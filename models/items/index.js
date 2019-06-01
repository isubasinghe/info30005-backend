"use strict"

// ensure mongoose is connected
const _ = require('../mongodb');

const items = require('./itemSchema');

module.exports = items;