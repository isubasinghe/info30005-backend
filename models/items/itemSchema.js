const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('mongoose-bcrypt');
const users = require('../users/index');
const Categories  = Object.freeze({
    Fruit: "FRUIT",
    Veg: "VEG",
    Meat: "MEAT",
    Fish: "FISH"
});
const UnitTypes = Object.freeze({
    Piece: "piece",
    Grams: "g",
    MilliLitre: "mL"
});
const LocationTypes = Object.freeze({
    Point: "Point"
});
const ItemSchema = new Schema({
        name: {type: String, index:true},
        category: {
            type: String,
            enum: Object.values(Categories),
            required: true
        },
        location: {
            type: {
                type: String, 
                enum: Object.values(LocationTypes),
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true
            },
        },
        // The number of actual items
        quantity: {type: Number, required: true, index: true, min: 1},
        // Unit of measurement for weight
        units: {type: String, enum: Object.values(UnitTypes), required: true},
        expiry: {type: Date, required: true, index: true},
        user: {type: Schema.Types.ObjectId, ref: users, index: true}
})
ItemSchema.plugin(bcrypt);
Object.assign(ItemSchema.statics, {Categories, LocationTypes, UnitTypes});
module.exports= mongoose.model('item', ItemSchema);