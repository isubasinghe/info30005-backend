const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
const axios = require('axios');

let getRecipes = function(req, res){
    let ingredients = ""
   User.find({email: req.body.email}, "items.name").then(items =>{
        if(items.name === null){
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
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
        res.send(err);
    });
    
}

module.exports.generate = generate;