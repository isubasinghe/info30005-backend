"use strict"



function signIn(request, response) {

    request.app.locals.db.users.findOne({email: request.body.email}).then(user => {
        if( user.verified ) {
            user.verifyPassword(request.body.password, function(err, valid) {
                if(err) {
                    console.log(err);
                }else {
                    if(valid) {
                        response.end();
                    }else {
                        console.log(valid);
                    }
                }
            });
        }else {
            throw new Error("Unverified User");
        }
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = signIn;