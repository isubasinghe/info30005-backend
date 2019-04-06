const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');

let addSuccessMsg = {
    status: 200,
    msg: "Added item to inventory"
};
let removeSuccessMsg = {
    status: 200,
    msg: "Removed item from inventory"
};

let addItem = function(req, res) {
    User.findOneAndUpdate({email: req.body.email},{$push: {items: req.body.item}}).then(user => {
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
};

let removeItem = function(req, res) {
    User.findOneAndUpdate({email: req.body.email},{$pull: {items: req.body.item}}).then(user => {
        if(user === null) {
            throw new Error("Could not find user");
        }else {
            res.send(removeSuccessMsg);
        }
    }).catch(err => {   
        res.send(err);
    });
};

module.exports.addItem = addItem;
module.exports.removeItem = removeItem;