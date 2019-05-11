const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
var moment = require('moment');
var emailValidate = require('email-validator');
var validator = require('./validate.js');

let addSuccessMsg = {
    status: 200,
    msg: "Added item to inventory"
};

let removeSuccessMsg = {
    status: 200,
    msg: "Removed item from inventory"
};

let updateSuccessMsg = {
    status: 200,
    msg: "Updated item"
};


let add = function(request, response) {
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = request.app.locals.jwt.verify(request.body.token);
    if (email === null){
        throw new Error("Could not find requested email");
    }
    else if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    else{
        // Finds the user which matches the specific email, and adds the new item to their inventory
        if (validator.checkMandatoryItemFields(request, response)){
            request.app.locals.db.users.findOneAndUpdate({email: email},{$push: {items: request.body.item}}).then(user => {
                if(user === null) {
                    throw new Error("Could not find user");
                }else {
                    response.send(addSuccessMsg);
                }
            }).catch(err => { 
                response.send(err);
            });
        }
    }
};
let listAllItems = function(request,response){
    //Checks if the email matches a valid tokens, which signifies a verified login session
    let email = request.app.locals.jwt.verify(request.body.token);
    if (email == null){
        throw new Error("Could not find requested email")
    }
    else if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    else {
        //Returns all the items for the particular user
        request.app.locals.db.users.findOne({email: email}, "items").then(items =>{
            if(items === null){
                throw new Error("Could not find items");
            }
            else{
                response.send(items);
            }
        }).catch(err =>{
             response.send(err);
        })
    }
}
let remove = function(request, response) {
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = request.app.locals.jwt.verify(request.body.token);
    if (email === null){
        throw new Error("Could not find requested email");
    }
    else if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    else{
        //Finds the valid email and removes the item from that user
        if (request.body.id && typeof request.body.id === 'string'){
            console.log(typeof request.body.id);
            request.app.locals.db.users.findOneAndUpdate({email: email},{$pull: {items: {_id: request.body.id}}}).then(user => {
                if(user === null) {
                    throw new Error("Could not find user");
                }else {
                    response.send(removeSuccessMsg);
                }
            }).catch(err => {   
                response.send(err);
            });
        }
    }
};
let increase = function(request, response){
    let email = request.app.locals.jwt.verify(request.body.token);
    // Ensures email is valid
    if(email === null){
        throw new Error("Could not find requested email");
    }
    if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    // Ensures item id is valid
    if(request.body.id && typeof request.body.id == 'string'){
        request.app.locals.db.users.findOneAndUpdate({"items._id": request.body.id}, {$inc: {"items.$.quantity": 1}}).then(items => {
            if(items === null) {
                throw new Error("Could not find items");
            }else {
                response.send(updateSuccessMsg);
            }
        }).catch(err=> {
            response.send(err);
        });
    }
}

let decrease = function(request, response){
    let email = request.app.locals.jwt.verify(request.body.token);
    // Ensures email is valid
    if(email === null){
        throw new Error("Could not find requested email");
    }
    if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    // Ensures item id is valid
    if(request.body.id && typeof request.body.id == 'string'){
        request.app.locals.db.users.findOne({"items._id": request.body.id}, "items.$").then(items => {
            if(items === null) {
                throw new Error("Could not find items");
            }else {
                // Ensures item has at least 2 of the item
                if (items.items[0].quantity > 1){
                    request.app.locals.db.users.findOneAndUpdate({"items._id": request.body.id}, {$inc: {"items.$.quantity": -1}}).then(items => {
                        if(items === null) {
                            throw new Error("Could not find items");
                        }else {
                            response.send(updateSuccessMsg);
                        }
                    }).catch(err=> {
                        response.send(err);
                    });
                }
                // User trying to decrease quantity to 0 which is removing the item
                else{
                    remove(request, response);
                }
            }
        }).catch(err=> {
            response.status(400).send({
                msg: "Item does not exist"
            });
        });
    }
}
let update = function(request, response){
    let email = request.app.locals.jwt.verify(request.body.token);
    if(email === null){
        throw new Error("Could not find requested email");
    }
    if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    if(!request.body.quantity && typeof request.body.quantity === 'number'){
        // updates quantity if new quantity is positive value
        if (request.body.quantity > 0){
            request.app.locals.db.users.findOneAndUpdate({"items._id": request.body.id}, {"items.$.quantity": request.body.quantity}).then(items => {
                if(items === null) {
                    throw new Error("Could not find items");
                }else {
                    response.send(updateSuccessMsg);
                }
            }).catch(err=> {
                response.send(err);
            });
        }
        // remove item
        else if (request.body.quantity == 0){
            remove(request, response);
        }
        else{
            response.status(400).send("quantity not valid");
        }
    }
    else{
        response.status(400).send("quantity not valid");
    }
}

module.exports.remove = remove;
module.exports.add = add;
module.exports.listAllItems = listAllItems;
module.exports.decrease = decrease;
module.exports.increase = increase;
module.exports.update = update;