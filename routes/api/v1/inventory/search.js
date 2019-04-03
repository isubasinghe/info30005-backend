var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
var User = mongoose.model('Users');

var search = function(req, res) {
    var queryConditions = {}
    if(req.body.itemName){
        queryConditions.name = req.body.itemName;
    }
    if(req.body.location){
        queryConditions.location = req.body.location;
    }
    User.find({items: queryConditions}, function(err, users){
        if(!err){
            console.log(users)
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};



module.exports.search = search;