"use strict"
const mongoose = require('mongoose');




function createConnectionString() {
    let connString = "mongodb://192.168.99.100/foodspan";
    return connString;
}

let conn = mongoose.connect(createConnectionString(), {useNewUrlParser: true});

if (mongoose.connection.readyState === 0 || (mongoose.connection.readyState === 3)) {
    console.log("Failed to connect, exiting now");
    process.exit(1);
}

module.exports = conn;

