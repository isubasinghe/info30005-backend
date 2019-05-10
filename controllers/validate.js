var emailValidate = require('email-validator');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
var moment = require('moment');
// When an invalid email is entered
function invalidEmail(response){
    try{
        throw new Error("Invalid email")
    }
    catch{
        response.status(400).json({msg: "Invalid email"});
    }
}

function checkMandatoryUserFields(request, response){
    let validFields = true;
    if(Object.keys(request.body).length === 0){
        validFields = false;
        response.status(400).json({msg: "Invalid entry for fields"});
        return validFields;
    }
    // Ensures email is a valid email
    if (!request.body.email){
        validFields = false;
        response.status(400).json({msg: "Invalid entry for email"});
        return validFields;
    }
    if(!emailValidate.validate(request.body.email)){
        validFields = false;
        response.status(400).json({msg: "Invalid entry for email"});
        return validFields;

    }
    // Ensures the name contains only alphabetic letters
    if (!request.body.name || !/^[a-zA-Z\s]*$/i.test(request.body.name)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for name"});
        return validFields;
    }
    // Ensures location is a longitude, latitiude pair
    if (!request.body.address || request.body.address === ""){
        validFields = false;
        response.status(400).json({msg: "Invalid field for address"});
        return validFields;
    }
    // Password must be 6-20 characters and have one capital and lowercase and special character
    if (!request.body.password || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(request.body.password)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for password"});
        return validFields;
    }
    return validFields;
}
function locationValidation(req, res){
    let isValid = false;
    let lon = req.body.location[0];
    let lat = req.body.location[1];
    if (typeof lon === 'number' && typeof lat === 'number'){
        if (lon >=-180 && lon<=180 && lat>=-90 && lat<=90){
            isValid = true;
        }
    }
    return isValid
}
function locationItemValidation(req, res){
    let isValid = false;
    let lon = req.body.item.location.coordinates[0];
    let lat = req.body.item.location.coordinates[1];
    if (typeof lon === 'number' && typeof lat === 'number'){
        if (lon >=-180 && lon<=180 && lat>=-90 && lat<=90){
            isValid = true;
        }
    }
    return isValid
}
function checkMandatoryItemFields(request, response){
    let validFields = true;
    // ensure item is not empty
    if(!request.body.item){
        validFields = false;
        response.status(400).json({msg: "Invalid entry for fields"});
        return validFields;
    }
    // ensure item name is an alphabetic string
    if (!request.body.item.name || !/^[a-z]+$/i.test(request.body.item.name)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for item name"});
        return validFields;
    }
    // ensures categories are of the item categories in schema
    if (!request.body.item.category || !Object.values(User.Categories).includes(request.body.item.category)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for category"});
        return validFields;
    }
    // ensures location is a longitude latitude point type
    if (!request.body.item.location.type || !Object.values(User.LocationTypes).includes(request.body.item.location.type)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for location type"});
        return validFields;
    }
    // ensures actual coordinates fit with longitue and latitiude requirements
    if (!request.body.item.location.coordinates || !locationItemValidation(request, response)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for location coordinates"});
        return validFields;
    }
    // ensure quantity is numeric
    if (!request.body.item.quantity || !(typeof request.body.item.quantity === 'number')){
        validFields = false;
        response.status(400).json({msg: "Invalid field for quantity"});
        return validFields;
    }
    // ensure units is numeric
    if (!request.body.item.units || !(typeof request.body.item.units === 'number')){
        validFields = false;
        response.status(400).json({msg: "Invalid field for units"});
        return validFields;
    }
    // ensure date is valid
    let date = moment(request.body.item.expiry);
    if (!request.body.item.expiry || !date.isValid()){
        validFields = false;
        response.status(400).json({msg: "Invalid field for expiry"});
        return validFields;
    }
    return validFields;
}

module.exports.checkMandatoryUserFields = checkMandatoryUserFields;
module.exports.invalidEmail = invalidEmail;
module.exports.locationValidation = locationValidation;
module.exports.checkMandatoryItemFields = checkMandatoryItemFields;