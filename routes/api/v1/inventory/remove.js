const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');

let removeSuccessMsg = {
    status: 200,
    msg: "Removed item from inventory"
};

let remove = function(req, res) {
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email === null){
        throw new Error("Could not find requested email");
    }
    else{
        //Finds the valid email and removes the item from that user
        User.findOneAndUpdate({email: email},{$pull: {items: req.body.item}}).then(user => {
            if(user === null) {
                throw new Error("Could not find user");
            }else {
                res.send(removeSuccessMsg);
            }
        }).catch(err => {   
            res.send(err);
        });
    }
};

module.exports.remove = remove;