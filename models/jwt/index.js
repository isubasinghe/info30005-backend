"use strict"
const jwt = require('jsonwebtoken');
const key = require('./key');


// Verify a signed JWT token and return the email on success
function verify(token) {
    try {
        return jwt.verify(token, key).user;
    } catch(err) {
        console.log(err);
        return null;
    }
}

// Create a JWT payload signed with our secret key
function create(user, maxAge, defaultloc) {
    let token = jwt.sign({user: user, defaultloc: defaultloc},
    key,
    {issuer: 'FoodSpan', subject: 'session-token',  algorithm: 'HS256', expiresIn: maxAge});
    return token;
}

module.exports = {create: create, verify: verify};
