"use strict"


require('dotenv').config();
const db = require('./models/db');


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const winston = require('winston');

const routes = require('./routes');
const jwt = require('./models/jwt');


var app = express();
app.locals.db = db;
app.locals.winston = winston;
app.locals.jwt = jwt;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


module.exports = app;
