"use strict"

const email = require('../sendgrid');

const mongoose = require('mongoose');
const bcrypt = require('mongoose-bcrypt');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    email: {type: String, lowercase: true, index: true, unique: true, required: true},
    password: {type:String, required: true, bcrypt: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    verifykey: {type: String, required: true, index: true},
    verified: {type: Boolean, required: true, default: false},
    items: [{
        name: {type: String, index:true},
        category: {
            type: String,
            enum: ["FRUIT", "VEG", "MEAT", "FISH"],
            required: true
        },
        location: {
            type: {
                type: String, 
                enum: ["Point"],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true, 
                index: true
            }
        },
        expiry: {type: Date, required: true, index: true}
    }]
});

UserSchema.plugin(bcrypt);

UserSchema.pre('save', function(next){
    console.log("Sending email to " + this.get('email'));

});

module.exports = mongoose.model("Users", UserSchema);
