"use strict"


const session = require('express-session');

let memorySession = session({
    secret: 'randomness here',
    resave: false, 
    cookie: {secure: true, maxAge: 900000},
    saveUninitialized: true
});


module.exports = memorySession;