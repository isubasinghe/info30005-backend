const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
const validator = require('./validate.js');
const marketplace_communicate = require('../models/sendgrid/marketplace_email.js');

let search = function(request, response) {
    //Searches all the users based on optional parameters on the items location or name
    let queryConditions = {}
    //Finds items nearby a particular location
    if(request.body.location){
        if(validator.locationValidation(request,response)){
            queryConditions= {"items.location": {$near: {$geometry:{type: "Point", coordinates: request.body.location}}}};
        }
        else{
            response.status(400).json({msg: "Invalid location coordinates"});
            return;
        }
    }
    //Finds objects which are of a particular name
    if(request.body.name && request.body.name.length > 0){
        queryConditions.items = {$elemMatch: {name: request.body.name}};
    }
    request.app.locals.db.users.find(queryConditions, "", function(err, item){
        if(!err){
            item.msg = "Searched items";
            response.send(item);
        }else{
            response.status(400).json({msg: "Could not find matching users"});
            //res.sendStatus(404);
        }
    }).limit(10);
};

let email_seller = function(request, response){
    let buyer_email = request.app.locals.jwt.verify(request.body.token);
    if (buyer_email === null || request.body.seller_email === null){
        response.status(400).json({msg: "Could not find email"});
    }
    else if(!emailValidate.validate(buyer_email) || !emailValidate.validate(request.body.seller_email)){
        validator.invalidEmail(response);
    }
    else{
        marketplace_communicate(request.body.seller_email, buyer_email).then(success => {
            console.log(success);
            response.status(200).json({msg: "Contacted requested user"});
        }).catch(err => {
            console.log(err);
            response.status(400).json({msg: "Could not contact user"});
        }); 
    }
};


module.exports.search = search;
module.exports.email_seller = email_seller;