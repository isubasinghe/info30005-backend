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
let listAllItems = function(req,res){
    //Checks if the email matches a valid tokens, which signifies a verified login session
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email == null){
        throw new Error("Could not find requested email")
    }
    else {
        //Returns all the items for the particular user
        User.find({email: email}, "items").then(items =>{
            if(items === null){
                throw new Error("Could not find items");
            }
            else{
                res.send(items);
            }
        }).catch(err =>{
            throw new Error("Server error");
            res.send(err);
        })
    }
}
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
module.exports.add = add;
module.exports.listAllItems = listAllItems;