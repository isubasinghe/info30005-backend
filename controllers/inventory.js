const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
var emailValidate = require('email-validator');
var moment = require('moment');
let addSuccessMsg = {
    status: 200,
    msg: "Added item to inventory"
};
function locationValidation(req, res){
    let isValid = false;
    let lon = req.body.item.location.coordinates[0];
    let lat = req.body.item.location.coordinates[1];
    if (typeof lon === 'number' && typeof lat === 'number'){
        console.log("is num");
        if (lon >=-180 && lon<=180 && lat>=-90 && lat<=90){
            console.log("isvalid");
            isValid = true;
        }
    }
    return isValid
}
function checkMandatoryFields(request, response){
    let validFields = true;
    if(!request.body.item){
        validFields = false;
        response.status(400).json({msg: "Invalid entry for fields"});
        return validFields;
    }
    if (!request.body.item.name || !/^[a-z]+$/i.test(request.body.item.name)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for item name"});
    }
    console.log(Object.values(User.Categories));
    if (!request.body.item.category || !Object.values(User.Categories).includes(request.body.item.category)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for category"});
    }
    // potentially add geocoding to validatew
    if (!request.body.item.location.type || !Object.values(User.LocationTypes).includes(request.body.item.location.type)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for location type"});
    }
    if (!request.body.item.location.coordinates || !locationValidation(request, response)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for location coordinates"});
    }
    if (!request.body.item.quantity || !(typeof request.body.item.quantity === 'number')){
        validFields = false;
        response.status(400).json({msg: "Invalid field for quantity"});
    }
    if (!request.body.item.units || !(typeof request.body.item.units === 'number')){
        validFields = false;
        response.status(400).json({msg: "Invalid field for units"});
    }
    let date = moment(request.body.item.expiry);
    if (!request.body.item.expiry || !date.isValid()){
        validFields = false;
        response.status(400).json({msg: "Invalid field for expiry"});
    }
    return validFields;
}

let add = function(req, res) {
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email === null || !emailValidate.validate(email)){
        throw new Error("Could not find requested email");
    }
    else{
        // Finds the user which matches the specific email, and adds the new item to their inventory
        if (checkMandatoryFields(req, res)){
            User.findOneAndUpdate({email: email},{$push: {items: req.body.item}}).then(user => {
                if(user === null) {
                    throw new Error("Could not find user");
                }else {
                    res.send(addSuccessMsg);
                }
            }).catch(err => { 
                res.send(err);
            });
        }
    }
};
let listAllItems = function(req,res){
    //Checks if the email matches a valid tokens, which signifies a verified login session
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email == null || !emailValidate.validate(email)){
        throw new Error("Could not find requested email")
    }
    else {
        //Returns all the items for the particular user
        User.find({email: email}, "items").then(items =>{
            if(items === null){
                throw new Error("Could not find items");
            }
            else{
                res.send(items);
            }
        }).catch(err =>{
            throw new Error("Server error");
            res.send(err);
        })
    }
}
let remove = function(req, res) {
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email === null || !emailValidate.validate(email)){
        throw new Error("Could not find requested email");
    }
    else{
        //Finds the valid email and removes the item from that user
        if (checkMandatoryFields(req, res)){
            User.findOneAndUpdate({email: email},{$pull: {items: req.body.item}}).then(user => {
                if(user === null) {
                    throw new Error("Could not find user");
                }else {
                    res.send(removeSuccessMsg);
                }
            }).catch(err => {   
                res.send(err);
            });
        }
    }
};

module.exports.remove = remove;
module.exports.add = add;
module.exports.listAllItems = listAllItems;