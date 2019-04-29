"use strict"

var emailValidate = require('email-validator');

let successMsg = {
    status: 200,
    msg: "Writen to db, activate account by checking your email"
};
// Just a prototype function
// and doesnt make sense with the stateless
// JWT tokens, however we will be introduing a 
// refresh token, this is needed then.
function logOut(request, response) {

}


// TODO: Implement a password reset function
// TODOL email a password reset page
function reset(request, response) {

}
// When the incorrect username or password is entered
function incorrectLogin(response){
    try{
        throw new Error("Wrong password or email")
    }
    catch{
        response.status(400).json({msg: "Wrong password or email"});
    }
}

// When an unverified user tries to login
function unverifiedUser(response){
    try{
        throw new Error("Unverified User")
    }
    catch{
        response.status(400).json({msg: "Unverified User"});
    }
}
// When an invalid email is entered
function invalidEmail(response){
    try{
        throw new Error("Invalid email")
    }
    catch{
        response.status(400).json({msg: "Invalid email"});
    }
}
function signIn(request, response) {
    if (!emailValidate.validate(request.body.email)){
        invalidEmail(response);
    }

    request.app.locals.db.users.findOne({email: request.body.email}).then(user => {
        if( user.verified ) {
            user.verifyPassword(request.body.password, function(err, valid) {
                if(err) {
                    throw new Error("Internal Server Error");
                }else {
                    if(valid) {
                        let token = request.app.locals.jwt.create(user.email, '12h');
                        response.json({token: token});
                    }else {
                        incorrectLogin(response);
                    }
                }
            });
        }else {
            unverifiedUser(response);
        }
    })
    .catch(err => {
        response.status(400).json({msg: "Signin Failed: Please check your details"});
    });
}



// Sends the approapriate error message
function getErrorMsg(err) {
    console.log(err);
    let errMsg;
    if(err.code === 11000){
        errMsg = {
            status: 401,
            msg: "An account with this email already exists"
        };
    }
    else{
        errMsg = {
            status: 400,
            msg: "Could not write to db"
        };
    }
    return errMsg;
}

function checkMandatoryFields(request, response){
    if (!emailValidate.validate(req.body.email)){
        invalidEmail(response);
    }
    if (req.body.name === "" || !/^[a-z]+$/i.test(req.body.name)){
        response.status(400).json({msg: "Invalid field for name"});
    }
    // potentially add geocoding to validatew
    if (req.body.address === ""){
        response.status(400).json({msg: "Invalid field for address"});
    }
}

function signUp(request, response) {
    
    const {email, password, name, address} = request.body;
    if (!emailValidate.validate(request.body.email)){
        invalidEmail(response);
    }
    request.app.locals.db.users.create({email: email, password: password, name: name, address: address}).then(user => {
        if(user === null) {
            throw new Error("Could not create user");
        }else {
            response.json(successMsg);
        }
    }).catch(err => {   
        response.json(getErrorMsg(err));
    });
}
// After the link to confirm a signup is sent to the 
// user and it is clicked, we set the verified status 
// of that user to true
function verify(request, response) {
    console.log(request.params.key);
    request.app.locals.db.users.findOneAndUpdate(
        {verifykey: request.params.key},
        {verified: true},
        {new: false, upsert: false, sort: false, runValidators: true}
        ).then(user => {
            if(user === null) {
                throw new Error("Unable to find user");
            }else {
                response.json({msg: "Verfied user"});
            }
        }).catch(err => {
            response.json({msg: "Unable to verify user"});
        });
}


module.exports.verify = verify;
module.exports.signup = signUp;
module.exports.signIn = signIn;
module.exports.reset = reset;
module.exports.logOut = logOut;