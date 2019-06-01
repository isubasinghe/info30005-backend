"use strict"


const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');

const uuidv4 = require('uuid/v4');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const LocationTypes = Object.freeze({
    Point: "Point"
});


const UserSchema = new Schema({
    email: {type: String, lowercase: true, index: true, unique: true, required: true},
    password: {type:String, required: true, bcrypt: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: true, default: 5.0},
    verifykey: {type: String, required: true, index: true, default: uuidv4, unique: true},
    verified: {type: Boolean, required: true, default: false},
    defaultloc: {    
        type: {
            type: String, 
            enum: Object.values(LocationTypes),
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true
        },
    }
});

UserSchema.index({"items.location": "2dsphere" });
UserSchema.index({"defaultloc": "2dsphere" });

// On an insert/update to the password field, 
// ensure that we run it through some rounds of bcrypt encryption.

UserSchema.plugin(bcrypt);
module.exports = mongoose.model("Users", UserSchema);
