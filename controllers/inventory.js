const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
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
        console.log(email);
        if (validator.checkMandatoryItemFields(request, response)){
            request.app.locals.db.users.findOne({email: email}).then(users => {
                if(users === null) {
                    throw new Error("Could not find user");
                }else {
                    let newItem = request.body.item;
                    newItem.user = users._id;
                    console.log(users);
                    request.app.locals.db.items.create(newItem).then(items =>{
                        if(items === null){
                            throw new Error("could not add item")
                        }
                        else{
                            response.send(addSuccessMsg);
                        }
                    }).catch(err => {
                        console.log(err);
                        response.status(400).json({msg: "Cannot add item"});
                    });
            }
            }).catch(err => { 
                response.status(400).json({msg: "Could not find user"});
                console.log(err);
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
        request.app.locals.db.users.findOne({email: email}).then(user =>{
            if(user === null){
                throw new Error("Could not find user");
            }
            else{
                console.log(user._id);
                request.app.locals.db.items.find({user: user._id}).then(items => {
                    if (items === null){
                        throw new Error("Could not find items")
                    }
                    else{
                        items.msg = "Listing items";
                        response.send(items);
                    }
                }).catch(err => {
                    response.status(400).json({msg: "Could not find items"});
                })
            }
        }).catch(err =>{
            response.status(400).json({msg: "Cannot find user"});
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
            //Returns all the items for the particular user
            request.app.locals.db.items.deleteOne({_id: request.body.id}).then(items => {
                if (items === null){
                    throw new Error("Cannot remove")
                }
                else{
                    response.send(removeSuccessMsg);
                }
            }).catch(err => {
                response.status(400).json({msg: "Cannot remove"});
            })
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
        request.app.locals.db.items.findOneAndUpdate({_id: request.body.id}, {$inc: {quantity: 1}}).then(items => {
            if(items === null) {
                throw new Error("Could not find items");
            }else {
                response.send(updateSuccessMsg);
            }
        }).catch(err=> {
            response.status(400).json({msg: "Cannot increase quantity"});
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
        request.app.locals.db.items.findOne({_id: request.body.id}).then(items => {
            if(items === null) {
                throw new Error("Could not find items");
            }else {
                // Ensures item has at least 2 of the item
                if (items.quantity > 1){
                    request.app.locals.db.items.findOneAndUpdate({_id: request.body.id}, {$inc: {quantity: -1}}).then(items => {
                        if(items === null) {
                            throw new Error("Could not find items");
                        }else {
                            response.send(updateSuccessMsg);
                        }
                    }).catch(err=> {
                        response.status(400).json({msg: "Cannot decrease quantity"});
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
    if(typeof request.body.quantity === 'number'){
        // updates quantity if new quantity is positive value
        if (request.body.quantity > 0){
            request.app.locals.db.items.findOneAndUpdate({_id: request.body.id}, {quantity: request.body.quantity}).then(items => {
                if(items === null) {
                    throw new Error("Could not find items");
                }else {
                    response.send(updateSuccessMsg);
                }
            }).catch(err=> {
                console.log(err);
                response.status(400).send({msg: "Cannot update quantity"});
            });
        }
        // remove item
        else if (request.body.quantity <= 0){
            remove(request, response);
        }
        else{
            response.status(400).send({msg: "Invalid quantity"});
        }
    }
    else{
        response.status(400).send({msg: "Invalid quantity"});
    }
}

module.exports.remove = remove;
module.exports.add = add;
module.exports.listAllItems = listAllItems;
module.exports.decrease = decrease;
module.exports.increase = increase;
module.exports.update = update;