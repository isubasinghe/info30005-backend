"use strict"

const setupAPIV1 = require('./v1');

function SetupAPI(app) {
    setupAPIV1(app);
}


module.exports = SetupAPI;