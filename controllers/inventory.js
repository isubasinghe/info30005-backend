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
            User.findOneAndUpdate({email: email},{$push: {items: request.body.item}}).then(user => {
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
        User.findOne({email: email}, "items").then(items =>{
            console.log(items)
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
        // if (validator.checkMandatoryItemFields(request, response)){
            console.log('Deleted');
            User.findOneAndUpdate({email: email},{$pull: {items: {_id: request.body.id}}}).then(user => {
                if(user === null) {
                    throw new Error("Could not find user");
                }else {
                    response.send(removeSuccessMsg);
                }
            }).catch(err => {   
                response.send(err);
            });
        // }
    }
};

// let update = function(request, response){
//     let email = request.app.locals.jwt.verify(request.body.token);
//     if(email === null){
//         throw new Error("Could not find requested email");
//     }
//     if(!emailValidate.validate(email)){
//         validator.invalidEmail(response);
//     }
//     User.findOneAndUpdate({email: email}, {$pull: {items: {request.body.item}}).then(user => {
//         if(user === null) {
//             throw new Error("Could not find user");
//         }else {
//             response.send(removeSuccessMsg);
//         }
//     })
// }

module.exports.remove = remove;
module.exports.add = add;
module.exports.listAllItems = listAllItems;