const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');

function locationValidation(req, res){
    let isValid = false;
    let lon = req.body.location[0];
    let lat = req.body.location[1];
    if (typeof lon === 'number' && typeof lat === 'number'){
        console.log("is num");
        if (lon >=-180 && lon<=180 && lat>=-90 && lat<=90){
            console.log("isvalid");
            isValid = true;
        }
    }
    return isValid
}

let search = function(req, res) {
    //Searches all the users based on optional parameters on the items location or name
    let queryConditions = {}
    //Finds items nearby a particular location
    if(req.body.location){
        if(locationValidation(req,res)){
            queryConditions= {"items.location": {$near: {$geometry:{type: "Point", coordinates: req.body.location}}}};
        }
        else{
            res.status(400).json({msg: "Invalid location coordinates"});
            return;
        }
    }
    //Finds objects which are of a particular name
    if(req.body.name){
        queryConditions.items = {$elemMatch: {name: req.body.name}};
    }
    User.find(queryConditions,'items', function(err, item){
        if(!err){
            res.send(item);
        }else{
            res.send(err);
            //res.sendStatus(404);
        }
    }).limit(10);
};



module.exports.search = search;