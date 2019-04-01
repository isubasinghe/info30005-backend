"use strict"


require('dotenv').config();
const db = require('./models/db');


const express = require('express');
const session = require('./models/sessions');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const winston = require('winston');

const routes = require('./routes');


var app = express();
app.locals.db = db;
app.locals.winston = winston;

app.use(session);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


module.exports = app;
