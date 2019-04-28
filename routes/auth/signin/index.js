"use strict"

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

function signIn(request, response) {

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

module.exports = signIn;