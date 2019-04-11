const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
const axios = require('axios');

let generate = function(req, res){
    let ingredients = "";
    let email = req.app.locals.jwt.verify(req.body.token);
    if (email == null){
        throw new Error("Could not find requested email")
    }
    else{
        User.aggregate([{$match: {email: email}},
        { $unwind: "$items" },
        { $sort: { "items.expiry": 1 } },
        { $group: { _id: "$_id", items: { $push: "$items" } } }]).then(items =>{
                if(items === null){
                    throw new Error("Could not find items");
                }
                else{
                    for (let i=0; i <items[0]["items"].length; i++){
                        ingredients+=items[0]["items"][i]["name"];
                        ingredients+=','
                    }
                    ingredients = ingredients.slice(0, ingredients.length-1);
                }
            }).catch(err =>{
                res.send(err);
            })
        let url = `http://food2fork.com/api/search?q=${ingredients}&key=${process.env.API_KEY}`;
        axios.get(url)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(err);
        });
    }
    
}

module.exports.generate = generate;