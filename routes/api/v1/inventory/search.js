var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
var User = mongoose.model('Users');

var search = function(req, res) {
    var searchParameter = req.body.itemName;
    User.find({items: {name: req.body.itemName}}, function(err, users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};



module.exports.search = search;