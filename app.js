"use strict"


require('dotenv').config();
const db = require('./models/db');


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const winston = require('winston');
const compression = require('compression');

const routes = require('./routes');
const jwt = require('./models/jwt');


var app = express();
app.locals.db = db;
app.locals.winston = winston;
app.locals.jwt = jwt;

app.use('/static/*', function(req, res, next){
    // Cache any results for 3 days
    res.header("Cache-Control", "private, max-age=259200");
    next();
});

// Use compression to save on download time for client
app.use('/static/*', compression());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Server all other routes with the react page, this is needed
// because React frontend is a SPA.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});


module.exports = app;
