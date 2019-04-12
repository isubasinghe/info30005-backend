const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');


let listAllItems = function(req,res){
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email == null){
        throw new Error("Could not find requested email")
    }
    else {
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
module.exports.listAllItems = listAllItems;


