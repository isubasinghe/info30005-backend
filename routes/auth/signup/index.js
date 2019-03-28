"use strict"

const emailValidate = require('email-validator').validate;


let successMsg = {
    status: 200,
    msg: "Writen to db, activate account by checking your email"
};


// TODO get the correct error message,
// for now just return a generic 400
function getErrorMsg(err) {
    let errMsg = {
        status: 400,
        msg: "Could not write to db"
    };
    return errMsg;
}

async function signUp(request, response) {
    
    const {email, password, name, address} = request.body;
    try {
        let doc = await request.app.locals.db.users.create({email: email, password: password, name: name, address: address});
        if(doc) {
            response.json(successMsg);
        }
    }catch(err) {
        response.json(errMsg);
    }
}


module.exports = signUp;