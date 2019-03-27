"use strict"


function setupAuth(app) {
    app.post("/signup", require('./signup'));
    app.post('/signin', require('./signin'));
    app.post('/verify', require('./verify'));
    app.post('/reset', require('./reset'));
    app.post('/logout', require('./logout'));

}

module.exports = setupAuth;