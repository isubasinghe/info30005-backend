"use strict"
const mongoose = require('mongoose');




function createConnectionString() {
    let connString = process.env.MONGO_URL;//"mongodb://192.168.99.100/foodspan";
    return connString;
}

mongoose.connect(createConnectionString(), {useNewUrlParser: true}).then(conn => {

}).catch(err => {
    console.log(err);
    process.exit(-1);
})

module.exports = conn;

