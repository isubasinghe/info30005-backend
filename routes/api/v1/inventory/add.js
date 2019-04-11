const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');

let addSuccessMsg = {
    status: 200,
    msg: "Added item to inventory"
};
let add = function(req, res) {
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email === null){
        throw new Error("Could not find requested email");
    }
    else{
        User.findOneAndUpdate({email: email},{$push: {items: req.body.item}}).then(user => {
            if(user === null) {
                console.log("Couldnt find user");
                throw new Error("Could not find user");
            }else {
                console.log("Added item");
                res.send(addSuccessMsg);
            }
        }).catch(err => {
            console.log(err);   
            res.send(err);
        });
    }
};

module.exports.add = add;