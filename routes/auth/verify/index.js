"use strict"


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

module.exports = verify;