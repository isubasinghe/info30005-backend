const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');




let search = function(req, res) {
    //Searches all the users based on optional parameters on the items location or name
    let queryConditions = {}
    //Finds items nearby a particular location
    if(req.body.location){
        queryConditions= {"items.location.coordinates": {$near: {$geometry: req.body.location}}};
    }
    //Finds objects which are of a particular name
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