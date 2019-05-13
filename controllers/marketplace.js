const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
const validator = require('./validate.js');

let search = function(request, response) {
    //Searches all the users based on optional parameters on the items location or name
    let queryConditions = {}
    //Finds items nearby a particular location
    if(request.body.location){
        if(validator.locationValidation(request,response)){
            queryConditions= {"items.location": {$near: {$geometry:{type: "Point", coordinates: request.body.location}}}};
        }
        else{
            response.status(400).json({msg: "Invalid location coordinates"});
            return;
        }
    }
    //Finds objects which are of a particular name
    if(request.body.name && request.body.name.length > 0){
        queryConditions.items = {$elemMatch: {name: request.body.name}};
    }
    request.app.locals.db.users.find(queryConditions, "", function(err, item){
        if(!err){
            item.msg = "Searched items";
            response.send(item);
        }else{
            response.status(400).json({msg: "Could not find matching users"});
            //res.sendStatus(404);
        }
    }).limit(10);
};



module.exports.search = search;