"use strict"

const email = require('../sendgrid');

const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');

const uuidv4 = require('uuid/v4');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Categories  = Object.freeze({
    Fruit: "FRUIT",
    Veg: "VEG",
    Meat: "MEAT",
    Fish: "FISH"
});
const LocationTypes = Object.freeze({
    Point: "Point"
});
const UnitTypes = Object.freeze({
    Piece: "piece",
    Grams: "g",
    MilliLitre: "mL"
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
    },
    items: [{
        name: {type: String, index:true},
        category: {
            type: String,
            enum: Object.values(Categories),
            required: true
        },
        location: {
            type: {
                type: String, 
                enum: Object.values(LocationTypes),
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true
            },
        },
        // The number of actual items
        quantity: {type: Number, required: true, index: true, min: 1},
        // Unit of measurement for weight
        units: {type: String, enum: Object.values(UnitTypes), required: true},
        expiry: {type: Date, required: true, index: true}
    }]
});

UserSchema.index({"items.location": "2dsphere" });
UserSchema.index({"defaultloc": "2dsphere" });

// On an insert/update to the password field, 
// ensure that we run it through some rounds of bcrypt encryption.

UserSchema.plugin(bcrypt);

// Notify the user to verify their email whenever
// a new User is about to be created.
UserSchema.post('save', function(doc, next){
    console.log("Sending email to " + this.get('email'));
    email(this.get('email'), this.get('verifykey')).then(success => {
        console.log(success);
        next();
    }).catch(err => {
        next(err);
    }); 
});
Object.assign(UserSchema.statics, {Categories, LocationTypes, UnitTypes});
module.exports = mongoose.model("Users", UserSchema);
