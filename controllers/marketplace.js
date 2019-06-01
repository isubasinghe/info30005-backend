const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const validator = require('./validate.js');
const emailValidate = require('email-validator');
const marketplace_communicate = require('../models/sendgrid/marketplace_email.js');

let search = async function(request, response) {
    //Searches all the users based on optional parameters on the items location or name
    let queryConditions = {}
    //Finds items nearby a particular location
    if(request.body.location){
        if(validator.locationValidation(request,response)){
            queryConditions= {location: {$near: {$geometry:{type: "Point", coordinates: request.body.location}}}};
        }
        else{
            response.status(400).json({msg: "Invalid location coordinates"});
            return;
        }
    }
    //Finds objects which are of a particular name
    if(request.body.name && request.body.name.length > 0){
        queryConditions = {name: request.body.name};
    }
    const items = await request.app.locals.db.items.find(queryConditions);
        if(!items === null){
            response.status(400).json({msg: "Could not find matching items"});
        }
        else{
            var itemUserInfo = {};
            itemUserInfo.msg = "Searched items";
            itemUserInfo.items = items;
            var usernames = [];
            var i= 0;
            for (const indivItems of items){
                request.app.locals.db.users.findOne({_id: indivItems.user}).then(users => {
                    if(users=== null) {
                        response.status(400).json({msg: "Could not find matching users"});
                        return;
                    }else {
                        usernames[i] = {name: users.name, email: users.email};
                        if(i == items.length-1){
                            itemUserInfo.users = usernames;
                            response.send(itemUserInfo);
                        }
                        i++;
                    }
                });
            }
        }
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
            
            response.status(200).json({msg: "Contacted requested user"});
        }).catch(err => {
            
            response.status(400).json({msg: "Could not contact user"});
        }); 
    }
};


module.exports.search = search;
module.exports.email_seller = email_seller;