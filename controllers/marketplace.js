const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const validator = require('./validate.js');
const ObjectId = mongoose.Types.ObjectId;
const emailValidate = require('email-validator');
const marketplace_communicate = require('../models/sendgrid/marketplace_email.js');

let search = function(request, response) {
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
    console.log(queryConditions)
    request.app.locals.db.items.find(queryConditions).then(items => {
        if(!items === null){
            throw new Error("Could not find item");
        }
        else{
            let itemUserInfo = {};
            itemUserInfo.msg = "Searched items";
            itemUserInfo.items = items;
            var usernames = [];
            console.log(items.length);
            for (let i=0; i < items.length; i++){
                request.app.locals.db.users.findOne({_id: items[i].user}).then(users => {
                    if(users=== null) {
                        response.status(400).json({msg: "Could not find matching users"});
                        return;
                    }else {
                        usernames[i] = users.name;
                        console.log(usernames[i], i);
                        if(i == items.length-1){
                            itemUserInfo.users = usernames;
                            response.send(itemUserInfo);
                        }
                    }
                });
            }
        }
    }).catch(err =>{
            response.status(400).json({msg: "Could not find matching items"});
            //res.sendStatus(404);
    });
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