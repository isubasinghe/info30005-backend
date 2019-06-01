const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const axios = require('axios');
var emailValidate = require('email-validator');

let generate = function(request, response){
    let ingredients = "";
    //Checks if the email matches a valid token, which signifies a verified login session
    let email = request.app.locals.jwt.verify(request.body.token);
    if (email == null){
        throw new Error("Could not find requested email")
    }
    else if(!emailValidate.validate(email)){
        validator.invalidEmail(response);
    }
    else{
        //Gets the matching user and sorts its items based on items expiring soon, with the max results being limited to 10
        console.log(email);
        request.app.locals.db.users.findOne({email: email}).then(users => {
            if(users === null) {
                throw new Error("Could not find user");
            }else {
                request.app.locals.db.items.aggregate([{$match: {user: users._id}}, { $sort: {expiry: 1 }},{ $limit : 10}]).then(items =>{
                if(items === null){
                    throw new Error("Could not find items");
                }
                else{
                    //Adds all the items to a query string
                    for (let i=0; i <items.length; i++){
                        ingredients+=items[i]["name"];
                        ingredients+=',';
                    }
                    ingredients = ingredients.slice(0, ingredients.length-1);
                    console.log(ingredients);
                    //Uses the Food2Fork API to generate recipes with users list of ingredients expiring soon
                    let url = `http://food2fork.com/api/search?q=${ingredients}&key=${process.env.RECIPE_API_KEY}`;
                    axios.get(url)
                    .then(res => {
                        if(res.data.error){
                            response.send({recipes: [], msg:"No recipes"});
                        }
                        else{
                            let data = res.data;
                            data.msg = "Successfully got recipes";
                            response.send(data);
                        }
                    })
                    .catch(error => {
                        response.status(400).json({msg: "Could not find recipes"});
                    });
                }
            // User has not added items yet, so return a 200
            }).catch(err =>{
                response.status(200).json({msg: "No items"});
            });
        }
        }).catch(err => { 
            response.status(400).json({msg: "Cannot find user"});
            console.log(err);
        });
    }
}

module.exports.generate = generate;