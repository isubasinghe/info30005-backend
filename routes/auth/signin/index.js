"use strict"



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
                        throw new Error("Wrong password or email");
                    }
                }
            });
        }else {
            throw new Error("Unverified User");
        }
    })
    .catch(err => {
        response.status(400).json({msg: "Wrong password or email"});
    });
}

module.exports = signIn;