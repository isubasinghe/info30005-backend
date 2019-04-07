const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');




let search = function(req, res) {
    let queryConditions = {}
    if(req.body.location){
        queryConditions= {"items.location.coordinates": {$near: {$geometry: req.body.location}}};
    }
    if(req.body.name){
        queryConditions.items = {$elemMatch: {name: req.body.name}};
    }
    User.find(queryConditions,'items', function(err, item){
        if(!err){
            res.send(item);
        }else{
            res.sendStatus(404);
        }
    }).limit(10);
};



module.exports.search = search;