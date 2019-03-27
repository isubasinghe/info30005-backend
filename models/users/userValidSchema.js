"use strict"

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserValidationSchema = new Schema ({
    key: {type: String, required: true},
    username: {type: Schema.Types.ObjectId, ref: 'User'}
});

