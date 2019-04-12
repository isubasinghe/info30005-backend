const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');

let addSuccessMsg = {
    status: 200,
    msg: "Added item to inventory"
};
let add = function(req, res) {
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email === null){
        throw new Error("Could not find requested email");
    }
    else{
        // Finds the user which matches the specific email, and adds the new item to their inventory
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
};

module.exports.add = add;