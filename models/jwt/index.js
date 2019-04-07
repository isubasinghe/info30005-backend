"use strict"
const jwt = require('jsonwebtoken');
const key = require('./key');

function verify(token) {
    return jwt.verify(token, key).then(payload => {
        if(!payload) {
            throw new Error("Unknown verification error");
        }
    });
}

function create(user, maxAge) {
    let token = jwt.sign({user: user},
    key,
    {issuer: 'FoodSpan', subject: 'session-token',  algorithm: 'HS256', expiresIn: maxAge});
    return token;
}

module.exports = {create: create, verify: verify};
