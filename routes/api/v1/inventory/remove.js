const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');

let removeSuccessMsg = {
    status: 200,
    msg: "Removed item from inventory"
};

let remove = function(req, res) {
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email === null){
        throw new Error("Could not find requested email");
    }
    else{
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