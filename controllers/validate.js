var emailValidate = require('email-validator');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
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
    if (!request.body.email|| !emailValidate.validate(request.body.email)){
        validFields = false;
        invalidEmail(response);
    }
    // Ensures the name contains only alphabetic letters
    if (!request.body.name || !/^[a-z]+$/i.test(request.body.name)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for name"});
    }
    // Ensures location is a lognitude latitiude
    if (!request.body.address || request.body.address === ""){
        validFields = false;
        response.status(400).json({msg: "Invalid field for address"});
    }
    // Password must be 6-20 character snad have one capital and lowercase and special character
    if (!request.body.password || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(request.body.password)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for password"});
    }
    return validFields;
}
function locationValidation(req, res){
    let isValid = false;
    let lon = req.body.location[0];
    let lat = req.body.location[1];
    if (typeof lon === 'number' && typeof lat === 'number'){
        console.log("is num");
        if (lon >=-180 && lon<=180 && lat>=-90 && lat<=90){
            console.log("isvalid");
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
        console.log("is num");
        if (lon >=-180 && lon<=180 && lat>=-90 && lat<=90){
            console.log("isvalid");
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
    }
    // ensures categories are of the item categories in schema
    if (!request.body.item.category || !Object.values(User.Categories).includes(request.body.item.category)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for category"});
    }
    // ensures location is a longitude latitude point type
    if (!request.body.item.location.type || !Object.values(User.LocationTypes).includes(request.body.item.location.type)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for location type"});
    }
    // ensures actual coordinates fit with longitue and latitiude requirements
    if (!request.body.item.location.coordinates || !locationItemValidation(request, response)){
        validFields = false;
        response.status(400).json({msg: "Invalid field for location coordinates"});
    }
    // ensure quantity is numeric
    if (!request.body.item.quantity || !(typeof request.body.item.quantity === 'number')){
        validFields = false;
        response.status(400).json({msg: "Invalid field for quantity"});
    }
    // ensure units is numeric
    if (!request.body.item.units || !(typeof request.body.item.units === 'number')){
        validFields = false;
        response.status(400).json({msg: "Invalid field for units"});
    }
    // ensure date is valid
    let date = moment(request.body.item.expiry);
    if (!request.body.item.expiry || !date.isValid()){
        validFields = false;
        response.status(400).json({msg: "Invalid field for expiry"});
    }
    return validFields;
}

module.exports.checkMandatoryUserFields = checkMandatoryUserFields;
module.exports.invalidEmail = invalidEmail;
module.exports.locationValidation = locationValidation;
module.exports.checkMandatoryItemFields = checkMandatoryItemFields;