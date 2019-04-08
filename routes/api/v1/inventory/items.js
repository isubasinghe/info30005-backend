const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
const axios = require('axios');

let addSuccessMsg = {
    status: 200,
    msg: "Added item to inventory"
};
let removeSuccessMsg = {
    status: 200,
    msg: "Removed item from inventory"
};

let listAllItems = function(req,res){
    User.find({email: req.body.email}, "items").then(items =>{
        if(items === null){
            throw new Error("Could not find items");
        }
        else{
            res.send(items);
        }
    }).catch(err =>{
        res.send(err);
    })
}

let addItem = function(req, res) {
    User.findOneAndUpdate({email: req.body.email},{$push: {items: req.body.item}}).then(user => {
        if(user === null) {
            console.log("Couldnt find user");
            throw new Error("Could not find user");
        }else {
            console.log("Added item");
            res.send(addSuccessMsg);
        }
    }).catch(err => {
        console.log(err);   
        res.send(err);
    });
};

let removeItem = function(req, res) {
    User.findOneAndUpdate({email: req.body.email},{$pull: {items: req.body.item}}).then(user => {
        if(user === null) {
            throw new Error("Could not find user");
        }else {
            res.send(removeSuccessMsg);
        }
    }).catch(err => {   
        res.send(err);
    });
};

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

module.exports.addItem = addItem;
module.exports.removeItem = removeItem;
module.exports.listAllItems = listAllItems;
module.exports.getRecipes = getRecipes;

