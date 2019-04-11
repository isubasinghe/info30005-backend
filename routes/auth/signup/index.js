"use strict"

const emailValidate = require('email-validator').validate;


let successMsg = {
    status: 200,
    msg: "Writen to db, activate account by checking your email"
};


// TODO get the correct error message,
// for now just return a generic 400
function getErrorMsg(err) {
    console.log(err);
    let errMsg = {
        status: 400,
        msg: "Could not write to db"
    };
    return errMsg;
}

function signUp(request, response) {
    
    const {email, password, name, address} = request.body;
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


module.exports = signUp;