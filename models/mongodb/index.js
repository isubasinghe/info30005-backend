"use strict"
const mongoose = require('mongoose');



// Connect to the mongodb database and then export, otherwise log
// an error and exit
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).then(conn => {
    module.exports = conn;
}).catch(err => {
    console.log(err);
    process.exit(-1);
})



