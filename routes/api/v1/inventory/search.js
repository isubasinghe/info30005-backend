const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');




let search = function(req, res) {
    let queryConditions = {}
    if(req.body.name){
        queryConditions.name = req.body.name;
        User.find({items: {$elemMatch: queryConditions}}, function(err, user){
            if(!err){
                res.send(user);
            }else{
                res.sendStatus(404);
            }
        }).limit(10);
    }
    if(req.body.location){
        // Can use this for equality 
        // User.find({items: {$elemMatch: {location: req.body.location}}}, function(err, user){
        User.find({"items.location.coordinates": {$near: {$geometry: req.body.location}}}, 'items', function(err, user){
            if(err){
                console.log(err);
                res.sendStatus(404);
            }
            else{
                console.log("searchign");
                res.send(user);
            }
        });
        
    }
};



module.exports.search = search;