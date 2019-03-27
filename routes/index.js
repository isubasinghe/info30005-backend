"use strict"

const setupAuth = require('./auth');
const setupAPI = require('./api');

function SetupRoutes(app) {
    setupAuth(app);
    setupAPI(app);
}

export default SetupRoutes;