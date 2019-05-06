const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = mongoose.model('Users');
const axios = require('axios');
var emailValidate = require('email-validator');

let generate = function(request, response){
    let ingredients = "";
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = request.app.locals.jwt.verify(request.body.token);
    if (email == null){
        throw new Error("Could not find requested email")
    }
    if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    else{
        //Gets the matching user and sorts its items based on items expiring soon, with the max results being limited to 10
        User.aggregate([{$match: {email: email}},
        { $unwind: "$items" },
        { $sort: { "items.expiry": 1 } },
        { $group: { _id: "$_id", items: { $push: "$items" } } },
        { $limit : 10 }]).then(items =>{
                if(items === null){
                    throw new Error("Could not find items");
                }
                else{
                    //Adds all the items to a query string
                    for (let i=0; i <items[0]["items"].length; i++){
                        ingredients+=items[0]["items"][i]["name"];
                        ingredients+=','
                    }
                    ingredients = ingredients.slice(0, ingredients.length-1);
                    console.log(ingredients);
                    //Uses the Food2Fork API to generate recipes with users list of ingredients expiring soon
                    let url = `http://food2fork.com/api/search?q=${ingredients}&key=${process.env.RECIPE_API_KEY}`;
                    console.log(url);
                    axios.get(url)
                    .then(res => {
                        response.send(res.data);
                    })
                    .catch(error => {
                        response.send(err);
                    });
                }
            }).catch(err =>{
                response.send(err);
            })
    }
    
}

module.exports.generate = generate;